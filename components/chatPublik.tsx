"use client"
import React, { useEffect, useState } from "react";
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Chat {
    id: string;
    text: string;
    username: string;
}

export default function ChatsPublik() {
    const [messages, setMessages] = useState<Chat[]>([]);
    const [text, setText] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        const q = query(
            collection(db, "publicChats"),
            orderBy("createdAt", "asc")
        );

        const unsub = onSnapshot(q, (snapshot) => {
            setMessages(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Chat, "id">),
                }))
            );
        });

        return () => unsub();
    }, []);

    const sendMessage = async () => {
        if (!text || !username) return;

        await addDoc(collection(db, "publicChats"), {
            text,
            username,
            createdAt: serverTimestamp(),
        });

        setText("");
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md border">
            {/* Header */}
            <div className="px-4 py-3 border-b flex items-center gap-2">
                <span className="text-xl">💬</span>
                <h2 className="text-lg font-semibold text-gray-800">
                    Chat Publik
                </h2>
            </div>

            {/* Chat List */}
            <div className="h-72 overflow-y-auto px-4 py-3 space-y-2 text-sm bg-gray-50">
                {messages.map((msg) => (
                    <div key={msg.id} className="flex">
                        <div className="bg-white border rounded-xl px-3 py-2 max-w-[85%]">
                            <p className="text-xs font-semibold mb-1 flex items-center gap-1">
                                <span
                                    className={`${msg.username === "Pak andis" || msg.username === "Pak rapli"
                                            ? "text-green-600"
                                            : "text-yellow-600"
                                        }`}
                                >
                                    {msg.username}
                                </span>

                                {(msg.username === "Pak andis" || msg.username === "Pak rapli") && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-600 text-white">
                                        ADMIN
                                    </span>
                                )}
                            </p>


                            <p className="text-gray-800 leading-relaxed">
                                {msg.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="border-t p-3 space-y-2 bg-white">
                {/* Username */}
                <input
                    type="text"
                    placeholder="Nama kamu"
                    className="w-full px-3 py-2 text-sm text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* Message Input */}
                <div className="flex items-center gap-2 bg">
                    <input
                        type="text"
                        placeholder="Tulis pesan..."

                        className="flex-1 text-black px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                        Kirim
                    </button>
                </div>
            </div>
        </div>


    );
}
