import Header from "./header";
import Navigation from './Navigation';
function Layouts({ children }) {
    return (
        <>
            <Navigation />
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default Layouts;