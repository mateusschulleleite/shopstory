import { supabase } from "./supabase";

export async function uploadVideo(file, storeId, pagePath) {
  console.log("ok");
  if (!file) return null;

  const filePath = `${storeId}/${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("videos")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (error) {
    console.error("Erro ao enviar vídeo:", error);
    return null;
  }

  const { data: publicData } = supabase.storage
    .from("videos")
    .getPublicUrl(filePath);

  return publicData.publicUrl;
}
