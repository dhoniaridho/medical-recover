import Footer from "./Footer"
import Navigation from "./Navigation"

export default function DefaultLayout (props) {
    const {children} = props
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}