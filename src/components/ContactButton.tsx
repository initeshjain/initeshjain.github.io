import React, { useState } from "react";

interface ContactButtonProps {
    destination: string; // can be mailto:... or http(s)://...
}

const ContactButton: React.FC<ContactButtonProps> = ({ destination }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [mailSubject, setMailSubject] = useState("");
    const [mailBody, setMailBody] = useState("");

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const handleClick = () => {
        if (destination === "#") { return }
        if (destination.startsWith("mailto:")) {
            if (isMobile) {
                window.location.href = destination; // native email app
            } else {
                try {
                    // Parse mailto params
                    const mailUrl = new URL(destination);
                    const subject = mailUrl.searchParams.get("subject") || "";
                    const body = mailUrl.searchParams.get("body") || "";

                    setMailSubject(subject);
                    setMailBody(body);
                    setModalOpen(true);
                } catch (err) {
                    console.error("Invalid mailto link", err);
                }
            }
        } else {
            window.open(destination, "_blank");
        }
    };

    const handleSubmit = async () => {
        if (!userEmail) return;
        setLoading(true);

        try {
            await fetch("https://formsubmit.co/33f06496bd173814c310b8aa9d6177e5", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    email: userEmail,
                    subject: mailSubject || "Contact Request",
                    message: mailBody || "User is interested in your service",
                    _captcha: "false",
                }),
            });

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setModalOpen(false);
                setUserEmail("");
            }, 2000);
        } catch (error) {
            console.error("Error sending message", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="rounded-lg border px-3 py-1.5 text-sm hover:bg-black hover:text-white cursor-pointer"
            >
                Open
            </button>

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">

                        {success ? (
                            <p className="text-green-600">Thank you! We’ll contact you soon.</p>
                        ) : (
                            <>
                                <h2 className="text-xl mb-4 font-semibold">Enter your email</h2>
                                <input
                                    type="email"
                                    className="border w-full p-2 rounded mb-4"
                                    placeholder="your@email.com"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    required
                                />
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="rounded-lg border px-3 py-1.5 text-sm hover:bg-black hover:text-white cursor-pointer"
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactButton;
