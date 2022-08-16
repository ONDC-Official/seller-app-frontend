import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Shared/Button";
import NotFoundIllustration from "../../Assets/Images/404NotFound.svg";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-100 flex flex-row align-center justify-center">
      <div style={{ width: "400px" }} className="text-center">
        <div className="py-4 text-center">
          <img
            src={NotFoundIllustration}
            alt="404_not_found"
            style={{ height: "170px" }}
            className='m-auto'
          />
        </div>
        <h4 className="py-2">404 Not Found</h4>
        <p className="py-2">
          The page you are looking for does not exist! <br /> Return to home
          page
        </p>
        <div className="py-2">
          <Button
            variant="contained"
            className="!m-auto"
            title="GO TO HOME"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    </div>
  );
}
