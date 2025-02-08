const InventoryBuilder = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-center">
          FF7EC Gear Share Inventory
        </h1>
      </header>
      <main className="max-w-2xl mx-auto bg-white shadow rounded p-4">
        <form>
          <div className="mb-4">
            <label
              htmlFor="characterName"
              className="block text-sm font-medium text-gray-700"
            >
              Character Name
            </label>
            <input
              id="characterName"
              type="text"
              placeholder="Enter character name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          {/* More inputs for gear, weapons, materia, etc., go here */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Save Inventory
          </button>
        </form>
      </main>
    </div>
  );
};

export default InventoryBuilder;
