import PromoCard from "../components/PromoCard";

/**
 * Defines the "Not Found" page that is displayed for any unmatched route.
 *
 * @returns {JSX.Element}
 */
function NotFound() {
    let title = "Page Not Found";
    let body = "";
  
    return (
        <div className="NotFound content d-flex flex-column justify-content-center">
            <PromoCard 
                title={title}
                body={body}    
            />
        </div>
    );
}

export default NotFound;