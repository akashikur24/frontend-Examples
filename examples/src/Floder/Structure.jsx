import {
  ChevronDownIcon,
  ChevronRightIcon,
  FileTextIcon,
  FolderIcon,
  PlusIcon,
} from "lucide-react";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Structure = () => {
  const [root, setRoot] = useState([
    {
      name: "Home",
      folder: [
        { name: "about.txt" },
        { name: "contact", folder: [{ name: "akash" }, { name: "bala" }] },
      ],
    },
  ]);

  return (
    <div className="p-8">
      <ul>
        {root.map((folder) => (
          <Folders key={folder.name} folder={folder} updateRoot={setRoot} />
        ))}
      </ul>
    </div>
  );
};

const Folders = ({ folder, updateRoot }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [doc, setDoc] = useState("");

  const handleFileAdd = () => {
    setIsAdd(true);
    setIsOpen(true);
  };

  const handleAddDocument = () => {
    const newFolder = { name: doc };
    const updatedFolder = {
      ...folder,
      folder: [...(folder.folder || []), newFolder],
    };

    updateRoot((prev) => {
      const updateFolderInTree = (folders, updatedFolder) =>
        folders.map((item) =>
          item.name === folder.name
            ? updatedFolder
            : {
                ...item,
                folder: updateFolderInTree(item.folder || [], updatedFolder),
              }
        );

      return updateFolderInTree(prev, updatedFolder);
    });

    setIsAdd(false);
    setDoc("");
  };

  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.folder && (
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </button>
        )}
        {folder.folder ? <FolderIcon size={20} /> : <FileTextIcon size={20} />}
        <p>{folder.name}</p>
        {folder.folder && (
          <span>
            <PlusIcon
              size={15}
              className="cursor-pointer"
              onClick={handleFileAdd}
            />
          </span>
        )}
      </span>
      {isAdd && (
        <>
          <input
            type="text"
            onChange={(e) => setDoc(e.target.value)}
            value={doc}
          />
          <button onClick={handleAddDocument}>Add</button>
        </>
      )}
      {isOpen && (
        <ul className="pl-7">
          {folder.folder?.map((subfolder) => (
            <Folders
              key={subfolder.name}
              folder={subfolder}
              updateRoot={updateRoot}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Structure;
