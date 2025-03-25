"use client"
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function HoverMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Hover with a Popover.
      </Typography>

      <Popover
        disableScrollLock={true}
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        container={document.body}  
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </div>
  );
}
