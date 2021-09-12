import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <main>
        <h1>Bienvenue sur SportSee</h1>
        <nav aria-label="Des différents utilisateurs disponibles">
          <ul>
            <li>
              <Link to="/user/12">User 12</Link>
            </li>
            <li>
              <Link to="/user/18">User 18</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
