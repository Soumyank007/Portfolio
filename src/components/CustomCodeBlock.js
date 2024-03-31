import { React, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const CustomCodeBlock = ({ language, code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied text after 2 seconds
    };

    return (
        <>
            <div className="border dark:text-dark border-gray-300 bg-gray-100 flex items-center relative text-dark bg-token-main-surface-secondary px-2 py-2 -mt-2 text-xs font-sans justify-between rounded-t-md">
                <span className='capitalize text-sm'>{language}</span>
                <span className="" data-state="closed">
                    <button className="flex gap-1 items-center" onClick={handleCopy}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-sm"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        {copied ? 'Copied!' : 'Copy code'}
                    </button>
                </span>
            </div>
            <SyntaxHighlighter language={language} style={a11yDark} className="!pt-0 !mt-0">
                {code}
            </SyntaxHighlighter>
        </>
    );
}

export default CustomCodeBlock