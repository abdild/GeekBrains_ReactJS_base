import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import { API_URL } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { selectArticlesLoading, selectArticlesError, selectArticles } from "../../store/articles/selectors";
import { getArticles } from "../../store/articles/actions";

// export const News = () => {
//     // const [articles, setArticles] = useState([]);
//     // const [error, setError] = useState(false);
//     // const [loading, setLoading] = useState(false);

//     // const requestArticles = useCallback(() => {
//     //     setLoading(true);

//     //     fetch(API_URL)
//     //         .then(response => {
//     //             console.log(response);
//     //             if (!response.ok) {
//     //                 throw new Error("Request failed: ", response.status);
//     //             }
//     //             return response.json()
//     //         })
//     //         .then(result => setArticles(result))
//     //         .catch(() => {
//     //             setError(true);
//     //         })
//     //         .finally(() => {
//     //             setLoading(false);
//     //         });
//     // }, []);

//     const requestArticles = useCallback(async () => {
//         // setLoading(true);

//         // try {
//         //     const response = await fetch(API_URL);

//         //     if (!response.ok) {
//         //         throw new Error("Request failed: ", response.status);
//         //     }

//         //     const result = await response.json();

//         //     setArticles(result);
//         // } catch (err) {
//         //     setError(true);
//         // } finally {
//         //     setLoading(false);
//         // }
//     }, []);

//     useEffect(() => {
//         requestArticles();
//     }, []);

//     if (loading) {
//         return (
//             <>
//                 <div className="MainWindow">
//                     <div className="page404">
//                         <CircularProgress />
//                         Loading...
//                     </div>
//                 </div>

//             </>
//         )
//     }

//     if (error) {
//         return (
//             <>
//                 <div className="MainWindow">
//                     <div className="page404">
//                         Request error
//                     </div>
//                     <button onClick={requestArticles}>TRY AGAIN</button>
//                 </div>
//             </>
//         );
//     };

//     if (!articles.length) {
//         return (<div className="page404">
//             No articles
//         </div>)
//     };
//     return (articles.map((a) =>
//         <React.Fragment key={a.id}>
//             <div className="MainWindow">
//                 <div className="page404" style={{ textAlign: 'left' }}>
//                     {a.title}
//                     <span>{a.publishedAt}</span>
//                 </div>
//             </div>
//         </React.Fragment>)
//     );

// };

export const News = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);
    const articles = useSelector(selectArticles);

    const requestArticles = useCallback(() => {
        dispatch(getArticles());
    }, []);

    useEffect(() => {
        requestArticles();
    }, []);

    if (loading) {
        return <h3>LOADING</h3>;
    }

    if (error) {
        return (
            <>
                <h3>Request error</h3>
                <button onClick={requestArticles}>TRY AGAIN</button>
            </>
        );
    }

    if (!articles.length) {
        return <h3>No articles</h3>;
    }

    return (
        <ul>
            {articles.map((a) => (
                <React.Fragment key={a.id}>
                    <div className="MainWindow">
                        <div className="page404" style={{ textAlign: 'left' }}>
                            {a.title}
                            <span>{a.publishedAt}</span>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </ul>
    );
};