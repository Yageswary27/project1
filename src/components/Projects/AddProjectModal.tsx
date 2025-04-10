import React, { useState } from "react";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
  onCreate: (project: any) => void;
}

const AddProjectModal: React.FC<Props> = ({ onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("Website");
  const [scanTypes, setScanTypes] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleCheckbox = (value: string) => {
    setScanTypes(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = () => {
    if (!name || !url) return alert("Name and URL are required");
    onCreate({ name, url, type, scanTypes });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3">
          <X size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-4">Add New Project</h2>

        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-md"
        />

        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-md"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-md"
        >
          <option value="Website">Website</option>
          <option value="Single Page">Single Page</option>
          <option value="File">File</option>
          <option value="Other">Other</option>
        </select>

        <div className="mb-3">
          <label className="font-medium">Scan Types:</label>
          <div className="flex gap-3 mt-2 flex-wrap">
            {['Speed', 'Security', 'SEO'].map(type => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={scanTypes.includes(type)}
                  onChange={() => handleCheckbox(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm text-blue-600 hover:underline"
          >
            {showAdvanced ? "Hide" : "Show"} Advanced Settings
          </button>
        </div>

        {showAdvanced && (
          <div className="mt-3 p-3 border rounded bg-gray-50 text-sm">
            {/* Add your advanced options here */}
            <p>No advanced settings added yet.</p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="w-full mt-5 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Create Project
        </button>
      </div>
    </div>
  );
};

export default AddProjectModal;
