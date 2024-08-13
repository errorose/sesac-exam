import React from 'react';
import './styles/Bug.scss';

export default function Bug() {
  return (
        <div className="larva">
            <div className="body body1">
                <div className="eye eye-white"></div>
                <div className="eye eye-black"></div>
            </div>
            <div className="body body2"></div>
            <div className="body body3"></div>
            <div className="body body4"></div>
            <div className="body body5"></div>
            <img
                className="grass"
                src="grass.jpeg"
                alt="잔디"
            />
        </div>
  )
}
