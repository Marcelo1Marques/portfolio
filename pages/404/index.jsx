import Link from "next/link";

let styles = {
    error: "flex flex-col w-screen h-screen items-center justify-center",
};

const Error404 = () => {
    return (
        <div className={styles.error}>
            <h1>Error 404</h1>
            <Link href="/">
                <button>Retour</button>
            </Link>
        </div>
    );
};

export default Error404;