import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import ResultListItem from '../results/result-list-item.jsx';
import SearchListItem from '../results/search-list-item.jsx';

class PastSearches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [{
        image_url: '',
        name_first: 'no people were found for this search',
        name_last: '',
        profession: '',
        sleep: '',
        personality: '',
      }],
      places: [{
        main_image: '',
        name: 'There are no results for this search',
        cost: '',
        neighborhood: '',
        description: '',
        id: '',
      }],
      searches: [{
        purpose: 'You do not have any past searches',
        neighborhood: 'location',
        price_min: 0,
        price_max: 0,
        timeline: 'long-term',
        smoking: 'outside is fine',
        pet: 'anywhere',
        include_people: true,
        sleep: 'early bird',
        personality: 'introvert',
        age_min: 0,
        age_max: 100,
        timestamp: 'time-stamp',
      }],
      heading: 'Past Searches',
      people_button_heading: 'search for people',
      places_button_heading: 'search for places',
      people_link: '/search',
      places_link: '/search',
    };
    this.newSearch = this.newSearch.bind(this);
    this.deleteSearch = this.deleteSearch.bind(this);
  }
  componentDidMount() {
    console.log('SearchResults did mount'); // eslint-disable-line
    Axios.get(`/api/saved-searches/${localStorage.getItem('id_token')}`)
      .then((response) => {
        console.log('get saved-searches');
        console.dir(response);
        if (response.data.length) {
          this.setState({
            searches: response.data,
          });
        }
        if (this.props.location.state && this.props.location.state.people.name_first !== 'no people were found for this search') {
          this.setState({
            people: this.props.location.state.people,
            people_button_heading: 'more info',
            people_link: '/profile',
          });
        }
        if (this.props.location.state && this.props.location.state.places.name !== 'There are no results for this search') {
          this.setState({
            places: this.props.location.state.places,
            places_button_heading: 'more info',
            places_link: '/listing',
          });
        }
      })
      .catch((error) => { console.error(error); }); // eslint-disable-line
  }
  newSearch() {
    this.props.history.push('/search');
  }
  deleteSearch(searchId) {
    Axios.post(`/api/delete-search/${localStorage.getItem('id_token')}/${searchId}`)
      .then(() => {
        Axios.get(`/api/saved-searches/${localStorage.getItem('id_token')}`)
          .then((response) => {
            if (response.data.length) {
              this.setState({
                searches: response.data,
              });
            }
            if (this.props.location.state.people.name_first !== 'no people were found for this search') {
              this.setState({
                people: this.props.location.state.people,
                people_button_heading: 'more info',
                people_link: '/profile',
              });
            }
            if (this.props.location.state.places.name !== 'There are no results for this search') {
              this.setState({
                places: this.props.location.state.places,
                places_button_heading: 'more info',
                places_link: '/listing',
              });
            }
          })
          .catch((error) => { console.error(error); }); // eslint-disable-line
      })
      .catch((error) => { console.error(error); }); // eslint-disable-line
  }
  render() {
    const {
      heading, people, places, searches,
    } = this.state;
    return (
      <div>
        <div className="row mb-2 mt-2">
          <div className="col-10">
            <h1>{heading}</h1>
          </div>
          <div className="col-2">
            <button className="btn btn-secondary" onClick={this.newSearch}>New Search</button>
          </div>
        </div>
        <div className="row">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#places" role="tab">Places</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#people" role="tab">People</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#searches" role="tab">Past Searches</a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade" id="people" role="tabpanel">
            {people.map(person => (
              <ResultListItem
                image={person.image_url}
                name={`${person.name_first} ${person.name_last}`}
                financial={person.profession}
                about={person.sleep}
                description={person.personality}
                link={this.state.people_link}
                tag="userId"
                id={person.id}
                key={person.id}
                history={this.props.history}
                button_heading={this.state.people_button_heading}
              />
            ))}
          </div>
          <div className="tab-pane fade" id="places" role="tabpanel">
            {places.map(place => (
              <ResultListItem
                image={place.main_image}
                name={place.name}
                financial={place.cost}
                about={place.neighborhood}
                description={place.description}
                tag="spaceId"
                id={place.id}
                key={place.id}
                link={this.state.places_link}
                place={place.id}
                history={this.props.history}
                button_heading={this.state.places_button_heading}
              />
            ))}
          </div>
          <div className="tab-pane fade show active" id="searches" role="tabpanel">
            {searches.map(search => (
              <SearchListItem
                purpose={search.purpose}
                neighborhood={search.neighborhood}
                price_min={search.price_min}
                price_max={search.price_max}
                timeline={search.timeline}
                smoking={search.smoking}
                pet={search.pet}
                include_people={search.include_people}
                sleep={search.sleep}
                personality={search.personality}
                age_min={search.age_min}
                age_max={search.age_max}
                timestamp={search.timestamp}
                id={search.id}
                history={this.props.history}
                key={search.id}
                deleteSearch={this.deleteSearch}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PastSearches.propTypes = {
  history: PropTypes.object, // eslint-disable-line
};
PastSearches.defaultProps = {
  history: {
    push: () => (
      // eslint-disable-next-line
      console.log('you do not have access to props.history inside of this component')
    ),
  },
};

export default PastSearches;
