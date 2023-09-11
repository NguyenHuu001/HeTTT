import Header from "./header";
import { Footer } from "antd/es/layout/layout";
function Layouts({ children }) {
    return (
        <>
            {/* <Navigation /> */}
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default Layouts;