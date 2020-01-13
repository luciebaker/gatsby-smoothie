import React, {useEffect, useState} from 'react'

export const SmoothieComments = ({firebase, smoothieId}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase.subscribeToSmoothieComments({
            smoothieId,
            onSnapshot: (snapshot) => {
                console.log(snapshot);
                const snapshotComments = [];
                snapshot.forEach(doc => {
                    snapshotComments.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setComments(snapshotComments);
            }
        })

        return () => {
            if(unsubscribe){
                unsubscribe();
            }
        }

    }, [])

    console.log(comments)

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                <strong>{comment.username}</strong>
                <div>{comment.text}</div>
                </div>
            ))}
        </div>
    )
}
