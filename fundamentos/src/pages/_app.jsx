export default function App({ Component, pageProps }) {
    return (
        <div>
            <h1>Aplicação</h1>
            <Component {...pageProps} />
        </div>
    )
}
