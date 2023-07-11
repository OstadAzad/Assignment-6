import "./Header.css"
const Header = (props) => {
    return (
        <div>
             <p><br/></p>
            <h1 className="text-center tcolor">{props.title}</h1>
            <p><br/></p>
        </div>
    );
};
export default Header;