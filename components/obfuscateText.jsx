import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const getRandomCharacter = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
};

const obfuscateText = (originalText) => {
    let obfuscatedText = '';
    for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] !== ' ') {
            obfuscatedText += getRandomCharacter();
        } else {
            obfuscatedText += ' ';
        }
    }
    return obfuscatedText;
};

const ObfuscateText = ({ text, interval = 100, className, duration }) => {
    const [obfuscatedText, setObfuscatedText] = useState(text);

    useEffect(() => {
        const timer = setInterval(() => {
            setObfuscatedText(obfuscateText(text));
        }, interval);

        if (duration !== undefined) {
            const timeout = setTimeout(() => {
                clearInterval(timer);
                setObfuscatedText(text);
            }, duration);

            return () => {
                clearInterval(timer);
                clearTimeout(timeout);
            };
        }

        return () => clearInterval(timer);
    }, [text, interval, duration]);

    return <span className={cn('font-minecraft_text', className)} style={{ whiteSpace: 'pre' }}>{obfuscatedText}</span>;
};

export default ObfuscateText;
