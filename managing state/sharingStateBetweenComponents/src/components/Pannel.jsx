

const Pannel = ({ title, children, isActive, handleActive }) => {

  return (
    <section className="border p-2 mt-4 max-w-4xl rounded-md">
      <h3 className="font-bold">{title}</h3>

      {isActive ? (
          <p>{children}</p>
      ) : (
        <button
          onClick={handleActive}
          className="border px-2 mt-2 cursor-pointer hover:bg-gray-300">
          Show
        </button>
      )}
    </section>
  );
};

export default Pannel;
