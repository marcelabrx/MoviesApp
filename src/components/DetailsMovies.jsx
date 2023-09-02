import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";
export default function DetailsMovies() {
  const theme = useTheme();

  return (
    <div className="backgroundCard">
      <div className="detailsCard">
        <section style={{ marginRight: "20px" }}>
          <img
            src="/vite.svg"
            alt=""
            width="100%"
            height="450px"
            className="imgCard"
          />
        </section>
        <section style={{ color: "white" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1>
              Nombre de la Pelicula{" "}
              <span style={{ fontSize: "14px" }}>2002</span>
            </h1>

            <Link style={{ textDecoration: "none", color: "white", display:"flex" }}>
              <PlayCircleOutlineIcon />
              Ver trailer
            </Link>
          </div>

          <article>
            <h3>General</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus qui
              minima modi eos ducimus, explicabo delectus alias? Quia, earum
              illo.
            </p>
          </article>
          <article>
            <h3>Géneros</h3>
            <ul>
              <li>Hola</li>
              <li>Hola</li>
              <li>Hola</li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
