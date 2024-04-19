import { useParams } from "react-router-dom";
import { useFirebase } from "../../store/firebaseoperations/firebase";
import { useEffect, useState } from "react";
import './exploreDestination.css'

const ExploreDestination = () => {
    const { setId, getExplore, getExplorePlaces, getImageURL } = useFirebase();
    const [destination, setDestination] = useState(null);
    const [explorePlaces, setExplorePlaces] = useState([])
    const { exploreId } = useParams();

    useEffect(() => {
        setId(exploreId);
    }, [setId, exploreId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const exploreData = await getExplore(exploreId);
                setDestination(exploreData);
            } catch (error) {
                console.error("Error fetching explore data:", error);
            }
        };

        fetchData();
    }, [exploreId, getExplore]);
    useEffect(() => {
        const fetchData = async () => {
            try {
            const item = await getExplorePlaces()
    
            const placesWithImages = await Promise.all(
                item.map(async (item) => {
                    const imageUrl = await getImageURL(item.image);
                    return { ...item, imageUrl };
                })
            );
            setExplorePlaces(placesWithImages)
                
            } catch(error) {
                console.error("Error fetching place data:", error);
                
            }
    
        }
        fetchData()
    },[])

    console.log(explorePlaces);

    return ( 
        <>
            {destination && destination.imageUrl && (
                <div className="destination-explore">
                    <div className="destination-explore-banner">
                        <img src={destination.imageUrl} alt="" />
                        <div className="destination-explore-content">
                            <h1>{destination.title}</h1>
                            <div className="destination-explore-description">
                            <p>{destination.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
              <div className="destination-cards-container">
                {
                    explorePlaces && explorePlaces.map((data) => (
                        <div key={data.id} className="destination-cards">
                        <div className="explore-images">
                            <img src={data.imageUrl} alt="" />
                        </div>
                        <div className="explore-contents">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                        </div>
                    ))

                }
            
            </div>
            
        </>
    );
}
 
export default ExploreDestination;
