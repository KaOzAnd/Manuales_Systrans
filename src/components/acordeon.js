export const Acordeon = ({id,tittle,cont}) => { 
    const nameid = 'panelsStayOpen-heading'+id;
    const nameid2 = '#panelsStayOpen-collapse'+id;
    const nameid3 = 'panelsStayOpen-collapse'+id;
    return (
        <div className="accordion-item accordion-border-color">
        <h2 className="accordion-header" id={nameid}>
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target={nameid2} aria-expanded="true"
            aria-controls={nameid3}>
            {tittle}
          </button>
        </h2>
        <div id={nameid3} className="accordion-collapse collapse"
          aria-labelledby={nameid}>
          <div className="accordion-body">
            {cont}
          </div>
        </div>
      </div>
    );
  }