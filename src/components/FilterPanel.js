import React from 'react';

const FilterPanel = ({ filters, onFilterChange }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
      <select value={filters.department} onChange={(e) => onFilterChange('department', e.target.value)}>
        <option value="">All Departments</option>
        <option value="HR">HR</option>
        <option value="Engineering">Engineering</option>
        <option value="Sales">Sales</option>
      </select>

      <select value={filters.designation} onChange={(e) => onFilterChange('designation', e.target.value)}>
        <option value="">All Designations</option>
        <option value="Manager">Manager</option>
        <option value="Developer">Developer</option>
        <option value="Executive">Executive</option>
        <option value="QA">QA</option>
      </select>
    </div>
  );
};

export default FilterPanel;
