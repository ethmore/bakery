import Link from "next/link";

function ScrollToTop() {
    return (
        <Link
            href={"#hero"}
            className="fixed bottom-4 right-4 z-50 w-16 h-16 bg-background rounded-full">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)">
                <g>
                    <path
                        d="M12 6V18M12 6L7 11M12 6L17 11"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </g>
            </svg>
        </Link>
    );
}

export default ScrollToTop;
