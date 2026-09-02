// FAKE DATABASE - stands in for Supabase for now.
// Later we swap the insides but keep these exact function names,
// so nothing on the frontend side has to change.

function getReports() {
  return [
    { id: 1, problem: "Fan not working", room: "B-204", status: "open" },
    { id: 2, problem: "Water leak",       room: "C-101", status: "closed" },
    { id: 3, problem: "Wifi down",        room: "A-110", status: "open" }
  ];
}

function saveReport(problem, room) {
  console.log("Pretend-saving:", problem, room);
  return true;
}

