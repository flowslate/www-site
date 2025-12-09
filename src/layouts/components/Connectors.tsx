import React, { useState, useEffect } from 'react';

interface Connector {
  category: string;
  name: string;
  tags: string[];
  description: string;
}

const Connectors = () => {
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [filteredConnectors, setFilteredConnectors] = useState<Connector[]>([]);

  useEffect(() => {
    fetch('/connectors.json')
      .then(response => response.json())
      .then((data: Connector[]) => {
        setConnectors(data);
        setFilteredConnectors(data);
      });
  }, []);

  const connectorTypes = ['All', 'Databases', 'Cloud & Finance', 'CRM & Marketing', 'Spreadsheets & Productivity', 'Notifications & Actions'];

  useEffect(() => {
    let result: Connector[] = connectors;

    if (filter !== 'All') {
      result = result.filter(connector => connector.category === filter);
    }

    if (search) {
      result = result.filter(connector =>
        connector.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredConnectors(result);
  }, [search, filter, connectors]);

  return (
    <div>
      <div className="row mb-8">
        <div className="col-6">
          <input
            type="text"
            className="form-input w-full"
            placeholder="Search connectors..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="col-6">
          <select
            className="form-select w-full"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            {connectorTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        {filteredConnectors.map(connector => (
          <div key={connector.name} className="col-12 mb-8 sm:col-6 md:col-4">
            <div className="rounded-lg border border-border p-6 h-full">
              <h3 className="h4 mb-2">{connector.name}</h3>
              <p className="text-text">{connector.description}</p>
              <div className="mt-4">
                {connector.tags.map(tag => (
                  <span key={tag} className="badge mr-2">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connectors;
