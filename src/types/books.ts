export type Genre = {
    name: string;
    created_at: string;
    updated_at: string;
  };
  
export type Owner = {
    id: string;
    username: string;
  };
  
export type Book = {
    id: string;
    title: string;
    description: string;
    author: string;
    publish_date: string;
    cover_image_url: string;
    is_public: boolean;
    file_upload_status: "UPLOADED" | "PENDING" | "FAILED"; // adjust as needed
    file_ai_status: "READY" | "PROCESSING" | "FAILED"; // adjust as needed
    owner_id: string;
    owner: Owner;
    genres: Genre[];
    file_url?: string;
    file_type?: "application/pdf" | "application/epub+zip";
    rating?: string
  };
  