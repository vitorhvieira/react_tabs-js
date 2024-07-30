export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabName = tabs.find(({ id }) => activeTabId === id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={id === activeTabName.id ? 'is-active' : ''}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id !== activeTabName.id) {
                    onTabSelected(id);
                  }
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabName.content}
      </div>
    </div>
  );
};
