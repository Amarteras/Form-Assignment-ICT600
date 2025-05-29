document.getElementById("docForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const ic = form.ic.value.trim();
  const email = form.email.value.trim();
  const docTypeRadio = form.querySelector("input[name='docType']:checked");
  const otherDoc = form.otherDoc.value.trim();

  if (!name || !ic || !email || !form.studentSignature.value.trim() || !form.studentDate.value) {
    alert("Sila isi semua ruangan yang diperlukan.");
    return;
  }

  if (!docTypeRadio && !otherDoc) {
    alert("Sila pilih sekurang-kurangnya satu jenis dokumen atau isi 'Lain-lain'.");
    return;
  }

  const docType = docTypeRadio ? docTypeRadio.value : "";
  const docRequestDisplay = docType || `Lain-lain: ${otherDoc}`;
  const studentSignature = form.studentSignature.value.trim();
  const studentDate = form.studentDate.value;
  const staffSignature = form.staffSignature.value;
  const staffName = form.staffName.value;
  const staffDate = form.staffDate.value;

  const resultHTML = `
    <h3>Maklumat Permohonan Dokumen Pelajar</h3>
    <table>
      <tr><td><strong>Jenis Dokumen:</strong></td><td>${docRequestDisplay}</td></tr>
      <tr><td><strong>Nama Penuh:</strong></td><td>${name}</td></tr>
      <tr><td><strong>No. Kad Pengenalan:</strong></td><td>${ic}</td></tr>
      <tr><td><strong>No. Pelajar:</strong></td><td>${form.studentId.value}</td></tr>
      <tr><td><strong>Kod Program:</strong></td><td>${form.programCode.value}</td></tr>
      <tr><td><strong>Sesi Kemasukan:</strong></td><td>${form.entrySession.value}</td></tr>
      <tr><td><strong>Sesi Tamat:</strong></td><td>${form.endSession.value}</td></tr>
      <tr><td><strong>No. Telefon:</strong></td><td>${form.phone.value}</td></tr>
      <tr><td><strong>Emel:</strong></td><td>${email}</td></tr>
    </table>
    <p><strong>Perakuan:</strong> Saya mengaku bahawa maklumat yang diberikan adalah benar.</p>
    <table>
      <tr><td><strong>Tandatangan Pelajar:</strong></td><td>${studentSignature}</td></tr>
      <tr><td><strong>Tarikh:</strong></td><td>${studentDate}</td></tr>
    </table>
    <p><em>(Diisi oleh staf HEA setelah diproses)</em></p>
    <table>
      <tr><td><strong>Tandatangan Staf:</strong></td><td>${staffSignature || "____________________"}</td></tr>
      <tr><td><strong>Nama Staf:</strong></td><td>${staffName || "____________________"}</td></tr>
      <tr><td><strong>Tarikh:</strong></td><td>${staffDate || "____________________"}</td></tr>
    </table>
  `;

  document.getElementById("result").innerHTML = resultHTML;
  alert("Borang berjaya dihantar!");
});
