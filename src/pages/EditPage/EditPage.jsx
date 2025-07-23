import React, { useEffect, useRef, useState } from "react";
import "./EditPage.scss";
import Nav from "../../components/Nav/Nav";
import { uploadVideo } from "../../../lib/sendVideo";
import { useParams } from "react-router";

export default function EditPage({ urls }) {
  const { id } = useParams();
  console.log(id);

  const [url, setUrl] = useState("");
  const [video, setVideo] = useState([]);
  const [videoPreview, setVideoPreview] = useState();

  const inputVideoRef = useRef();

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    const preview = URL.createObjectURL(file);
    setVideoPreview(preview);
  };

  const handleRemoveVideo = (e) => {
    setVideoPreview();
    setVideo();
    inputVideoRef.current.value = "";
  };

  useEffect(() => {
    setUrl(urls[id].urlPage)
  }, [id]);

  return (
    <div className="newpage d-flex bg-light">
      <Nav />
      <div className="right p-4">
        <div className="mb-5">
          <h4>Editar página</h4>
        </div>
        <div className="form">
          <div className="mb-3">
            <label className="d-block mb-2">Url da página</label>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Insira a url da página aqui..."
              className="ps-3 p-1 w-50 rounded-4 border-1"
              type="text"
            ></input>
          </div>
          <div className="mb-3">
            <label className="d-block mb-2">Arquivo de vídeo</label>
            <input
              className="w-50"
              onChange={(e) => handleVideoChange(e)}
              type="file"
              accept="video/*"
              ref={inputVideoRef}
            />
          </div>
          {videoPreview && (
            <div className="preview">
              <label className="mb-2">Preview dos vídeos</label>
              <div>
                <ul className="d-flex gap-3 flex-wrap list-unstyled">
                  <li className="d-flex flex-column p-3 gap-2">
                    <video
                      controls
                      src={videoPreview}
                      width="200"
                      className="rounded"
                    />
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleRemoveVideo()}
                    >
                      Excluir
                    </button>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => uploadVideo(videos)}
                className="btn btn-danger p-1 w-25 rounded-5 mt-3"
              >
                Cadastrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
