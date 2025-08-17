// App.js
import './App.css';
import './index.css';
import InputField from './components/InputField/InputField';
import DataTable from './components/DataTable/DataTable';

function App() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Components Preview 🚀
      </h1>

      {/* InputField Examples */}
      <div className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">InputField Variants</h2>
        <InputField label="Default" placeholder="Enter text here" />
        <InputField label="Invalid" invalid placeholder="Invalid field" />
        <InputField label="Disabled" disabled placeholder="Can't type here" />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
        />
      </div>

      {/* DataTable Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">DataTable Example</h2>
        <DataTable
          data={[
            { id: 1, name: 'Dinesh', role: 'Developer' },
            { id: 2, name: 'Ravi', role: 'Designer' },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
