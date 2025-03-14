const base_url = import.meta.env.VITE_API_BASE_URL;

export async function getBooks() {
    const token = localStorage.getItem("token");
    
    if(!token) throw new Error("No token found");

    const response = await fetch(`${base_url}/api/books`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    if (!response.ok) throw new Error("Failed to get books");
    const res = await response.json();
    return res;
}

export async function getBookByIdRead(id: string) {
    const token = localStorage.getItem("token");
    
    if(!token) throw new Error("No token found");

    const response = await fetch(`${base_url}/api/books/${id}/read`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    if (!response.ok) throw new Error("Failed to get books");
    const res = await response.json();
    return res;
}

export async function getBookById(id: string) {
    const token = localStorage.getItem("token");
    
    if(!token) throw new Error("No token found");

    const response = await fetch(`${base_url}/api/books/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    if (!response.ok) throw new Error("Failed to get books");
    const res = await response.json();
    return res;
}

export async function getHighlightAI(data: {
    id: string,
    highlightText: string,
    page: string
}) : Promise<{
    data: {
        response: string
    }
}> {
    const token = localStorage.getItem("token");
    
    if(!token) throw new Error("No token found");

    const response = await fetch(`${base_url}/api/books/${data.id}/highlight`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            "highlight_text": data.highlightText,
            "page": data.page
        }),
    });
    if (!response.ok) throw new Error("Failed to get books");
    const res = await response.json();
    return res;
}