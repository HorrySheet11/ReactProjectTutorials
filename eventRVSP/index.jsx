const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendees, setAttendees] = useState('');
  const [preferences, setPreferences] = useState('');
  const [guests, setGuests] = useState('No');
  const [resultsHidden, setResultsHidden] = useState(true);

  const handleGuests = e =>{
    const checked  = e.target.checked;
      return setGuests(checked? 'Yes': 'No')
  }

  const result = e =>{
    setResultsHidden(false);
  }

  return(<div>
    <form onSubmit={e => e.preventDefault()}>
      <h1>Event RSVP Form</h1>
      <label>Name:<input type="text" value={name} onChange={e => setName(e.target.value)} required /></label>
      <label>Email:<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
      <label>Number of Attendees:<input type="number" value={attendees} onChange={e => setAttendees(e.target.value)} required /></label>
      <label>Dietary Preferences:<input type="text" value={preferences} onChange={e => setPreferences(e.target.value)} /></label>
      <label>Bringing additional guests?<input value={guests} onChange={handleGuests}  type="checkbox" /></label>

      <button disabled={!name || !email || !attendees} type="submit"  onClick={result}>Submit RSVP</button>

      <div className="results" hidden={resultsHidden} >
        <h2 className="submitted">RSVP Submitted!</h2>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Number of attendees: {attendees}</h3>
        <h3>Dietary preferences: {preferences == '' ? 'None' : preferences}</h3>
        <h3>Bringing additional guests: {guests}</h3>
      </div>
    </form>
  </div>)
}