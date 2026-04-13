import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

export const ApiRyC = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [query, setQuery] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios.get('https://rickandmortyapi.com/api/character/', {
      params: { page, name: query },
      cancelToken: source.token
    })
      .then(({ data }) => {
        setData(data.results || []);
        setInfo(data.info || {});
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        if (err.response?.status === 404) {
          setData([]);
          setInfo({});
          return;
        }
        console.error(err);
      });

    return () => source.cancel();
  }, [page, query]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0f0f0f",
        color: "white",
      }}
    >
      <Header />

      <div style={{ flex: 1, padding: "40px 20px" }}>

        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          API de personajes
        </h1>

        {/* BUSCADOR */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
          <input
            placeholder="Buscar personaje..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            style={{
              width: "300px",
              padding: "10px",
              border: "1px solid #333",
              background: "#111",
              color: "white",
              outline: "none",
            }}
          />
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {data.map((char) => (
            <div
              key={char.id}
              style={{
                width: "200px",
                border: "1px solid #333",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={char.image}
                alt={char.name}
                style={{ width: "100%" }}
              />

              <h4>{char.name}</h4>
              <p style={{ color: "#aaa" }}>{char.gender}</p>
            </div>
          ))}
        </div>

        {/* PAGINACIÓN */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => setPage(page - 1)}
            disabled={!info.prev}
            style={{
              margin: "0 10px",
              padding: "8px 12px",
              background: "white",
              color: "black",
              border: "none",
              cursor: "pointer",
            }}
          >
            Anterior
          </button>

          <span style={{ margin: "0 10px" }}>
            Página {page}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={!info.next}
            style={{
              margin: "0 10px",
              padding: "8px 12px",
              background: "white",
              color: "black",
              border: "none",
              cursor: "pointer",
            }}
          >
            Siguiente
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};