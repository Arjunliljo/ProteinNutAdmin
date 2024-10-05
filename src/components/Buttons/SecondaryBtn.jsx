function SecondaryBtn({ children, style, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className="btn secondary-btn">
      {children}
    </button>
  );
}

export default SecondaryBtn;
