const codes = [
  { code: "300KLIKESWOWTHANKU", level: "No level required" },
  { code: "BOSSRUSHHEADSTART", level: "Level 5+" },
  { code: "SUNGODVSDRAGON", level: "Level 10+" },
  { code: "UPDATEISHERE", level: "Level 5+" },
  { code: "HAPPYNEWYEARS", level: "Level 20+" }
];

const codesDiv = document.getElementById("codes");
const searchInput = document.getElementById("search");

function showCodes(list) {
  codesDiv.innerHTML = "";
  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "code-card";
    div.innerHTML = `
      <div class="code">${item.code}</div>
      <div class="level">${item.level}</div>
    `;
    codesDiv.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = codes.filter(c =>
    c.code.toLowerCase().includes(value)
  );
  showCodes(filtered);
});

showCodes(codes);
