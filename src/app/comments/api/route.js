

// cookies set  start function
export async function GET() {
    return Response.json(comments,{
        headers : {
            "Set-Cookie" : "theme-dark"
        }
    })
}
// cookies set  end 





const comments = [
    {
        id : 1,
        text : "Comment 1"
    },
    {
        id : 2,
        text : "Comment 2"
    },
    {
        id : 3,
        text : "Comment 3"
    },
]