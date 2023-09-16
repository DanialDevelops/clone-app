import React from "react";

const itemStyle = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  color: "rgb(57, 53, 103)",
  padding: "0px 1.6rem 0rem 0.8rem",
};

function Nav() {
  const adStyle = {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  };

  return (
    <div style={adStyle}>
      <a href="https://www.ownr.co/">
        <svg width="132" height="33" fill="none" viewBox="0 0 132 33">
          <path
            fill="currentColor"
            d="M64.178 7.4H70.4l3.11 10.231h.066l2.804-10.23h5.362l2.722 10.296h.066L87.536 7.4h6.222l-5.611 18.276h-6.521l-2.621-9.247h-.074l-2.625 9.247h-6.389L64.178 7.4zm37.547 2.334h.097c1.439-2.01 3.294-3.111 5.806-3.111 4.176 0 6.322 2.838 6.322 7.092v11.961h-6.699V15.387c0-1.913-.778-3.157-2.512-3.157-1.735 0-2.722 1.505-2.722 3.5v9.946h-6.731V7.206h6.369v2.528h.07zm21.83.416h.117c1.812-2.621 3.387-3.236 6.307-3.111.381-.029.762.037 1.112.19v5.744h-.167c-4.604-.942-7.042 1.108-7.042 5.23v7.473h-6.821V7.4h6.44v2.761h.042l.012-.011zM54.274 6.623a9.91 9.91 0 00-9.169 6.113 9.928 9.928 0 00-.57 5.73 9.926 9.926 0 007.789 7.797 9.912 9.912 0 005.73-.563 9.91 9.91 0 006.124-9.161 9.917 9.917 0 00-9.904-9.916zm0 14.119a4.208 4.208 0 01-4.114-5.028 4.199 4.199 0 013.305-3.299 4.209 4.209 0 012.427.24 4.21 4.21 0 011.363 6.862 4.21 4.21 0 01-2.981 1.225z"
          ></path>
          <path
            fill="#5F3DC8"
            d="M5.773 28.834a11.564 11.564 0 01-4.277-15.698 11.344 11.344 0 016.953-5.33 11.35 11.35 0 018.678 1.204L5.773 28.834z"
          ></path>
          <path
            fill="#5F3DC8"
            d="M12.85 1.568a11.36 11.36 0 0115.601 4.121 11.571 11.571 0 01-4.247 15.71L12.85 1.568zm20.119 19.831a11.472 11.472 0 01-22.942 0h22.942z"
          ></path>
        </svg>
      </a>
      <div>
        <a style={itemStyle} href="/product">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              fillOpacity=".8"
              fillRule="evenodd"
              d="M11.39 6.854L8.353 9.889a.5.5 0 01-.708 0L4.611 6.854A.5.5 0 014.964 6h6.072a.5.5 0 01.353.854z"
            ></path>
          </svg>
          <span>Solutions</span>
        </a>
        <a style={itemStyle} href="/pricing">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <rect
              width="6"
              height="6"
              x="5"
              y="7"
              fill="currentColor"
              fill-opacity=".8"
              fill-rule="evenodd"
              rx="1"
              transform="rotate(45 10.414 9)"
            ></rect>
          </svg>
          <span>Pricing</span>
        </a>
        <a style={itemStyle} href="/resources">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              fill-opacity=".8"
              fill-rule="evenodd"
              d="M11.39 6.854L8.353 9.889a.5.5 0 01-.708 0L4.611 6.854A.5.5 0 014.964 6h6.072a.5.5 0 01.353.854z"
            ></path>
          </svg>
          <span>Resources</span>
        </a>
        <a style={itemStyle} href="/company">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              fill-opacity=".8"
              fill-rule="evenodd"
              d="M11.39 6.854L8.353 9.889a.5.5 0 01-.708 0L4.611 6.854A.5.5 0 014.964 6h6.072a.5.5 0 01.353.854z"
            ></path>
          </svg>
          <span>Company</span>
        </a>
      </div>
    </div>
  );
}

export default Nav;
