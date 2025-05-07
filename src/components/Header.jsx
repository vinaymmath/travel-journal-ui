import globe from "../assets/globe.png"

export default function Header () {
    return (
        <div>
            <header className="header">
                <img src={globe}></img>
                <div>
                    <h1 className="header__field">my travel journal</h1>
                </div>
            </header>
        </div>
    )
}