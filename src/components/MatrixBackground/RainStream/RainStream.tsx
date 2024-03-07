import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import useInterval from "@use-it/interval";

import styles from './RainStream.module.css';

const WORD_SET = [
    "Software Engineer", "Fullstack Developer", "Frontend", "Backend",
    "Bootstrap", "Tailwind", "Material UI",
    "React", "Nodejs", "TypeScript", "JavaScript", "jQuery", "jest",
    "Android", "Flutter", "Dart",
    "Python", "Django", "Flask",
    "Ruby", "Ruby on Rails",
    "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis",
    "AWS", "Azure", "Heroku", "Serverless", "Firebase",
    "Docker", "Kubernetes", "CI/CD",
    "Git", "GitHub", "GitLab",
    "Java", "Selinium",
    "GraphQL", "REST API",
];
const SPECIAL_CHARS = `$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789${SPECIAL_CHARS}`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 50;
const MAX_STREAM_SIZE = 100;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 8000;

const getRandInRange = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;

const getRandWord = () => WORD_SET[Math.floor(Math.random() * WORD_SET.length)];
const getRandSpecialChar = () => SPECIAL_CHARS.charAt(Math.floor(Math.random() * SPECIAL_CHARS.length));
const getRandChar = () =>
    VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () => {
    const randRange = getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE);
    let stream = "";
    while (stream.length < randRange) {
        const randWord = getRandWord();
        if (stream.length + randWord.length < randRange) {
            stream += randWord + getRandSpecialChar();
        } else {
            break;
        }
    }
    return stream.split('');
}
// const getRandStream = () => 
//     new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
//         .fill(0)
//         .map(_ => getRandChar());

const getMutatedStream = (stream: string[]) => {
    let newStream = stream;
    for (let i = 1; i < stream.length; i++) {
        if (Math.random() < STREAM_MUTATION_ODDS && SPECIAL_CHARS.includes(stream[i])) {
            newStream[i] = getRandSpecialChar();
        }
    }
    newStream[stream.length - 1] = getRandSpecialChar();
    return newStream;
};

type RainStreamType = {
    height: number;
}

const RainStream = ({ height }: RainStreamType) => {
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [stream, setStream] = useState<string[]>(getRandStream());
    const [topPadding, setTopPadding] = useState(stream.length * -50);
    const [intervalDelay, setIntervalDelay] = useState<number | null>(null);

    // Initialize intervalDelay
    useEffect(() => {
        setTimeout(() => {
            setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
        }, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
    }, []);

    useInterval(() => {
        if (!height) return;

        if (!intervalDelay) return;

        // If stream is off the screen, reset it after timeout
        if (shouldAnimate) {
            if (topPadding > height) {
                setStream([]);
                const newStream = getRandStream();
                setStream(newStream);
                setTopPadding(newStream.length * -44);
                setIntervalDelay(null);
                setTimeout(
                    () =>
                        setIntervalDelay(
                            getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY),
                        ),
                    getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS),
                );
            } else {
                setTopPadding(topPadding + 44);
            }
        }
        setStream(getMutatedStream);
    }, intervalDelay);

    return <div className={styles.verticalStream} style={{ marginTop: topPadding }} onMouseOver={() => setShouldAnimate(false)} onMouseOut={() => setShouldAnimate(true)}>
        {stream.map((char, index) => (
            <a
                key={index}
                className={classNames(styles.rainChar)}
                style={{
                    // Reduce opacity for last chars
                    opacity: index < 6 ? 0.1 + index * 0.15 : 1,
                    color: index === stream.length - 1 ? '#fff' : SPECIAL_CHARS.includes(char) ? '#20c20e' : undefined,
                    textShadow:
                        index === stream.length - 1
                            ? '0px 0px 20px rgba(255, 255, 255, 1)'
                            : undefined,
                }}
            >
                {char}
            </a>))}
    </div>;
};

export default RainStream;
