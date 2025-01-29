import React, { useState } from 'react';

interface BautismoFormData {
  director: string;
  baptismName: string;
  firstHymn: string;
  firstPrayer: string;
  firstMessage: string;
  secondMessage: string;
  finalHymn: string;
  finalPrayer: string;
}

interface ActividadFormData {
  activityName: string;
  leader: string;
  firstSong: string;
  openingPrayer: string;
  mainMessage: string;
  closingMessage: string;
  finalSong: string;
  closingPrayer: string;
}

const TasksPage = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [bautismoForm, setBautismoForm] = useState<BautismoFormData>({
    director: '',
    baptismName: '',
    firstHymn: '',
    firstPrayer: '',
    firstMessage: '',
    secondMessage: '',
    finalHymn: '',
    finalPrayer: '',
  });

  const [actividadForm, setActividadForm] = useState<ActividadFormData>({
    activityName: '',
    leader: '',
    firstSong: '',
    openingPrayer: '',
    mainMessage: '',
    closingMessage: '',
    finalSong: '',
    closingPrayer: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleBautismoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBautismoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleActividadChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setActividadForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = () => {
    let message = '';

    if (selectedValue === 'bautismo') {
      message = `*Bautismo de ${bautismoForm.baptismName}*

Dirige: ${bautismoForm.director}
Primer Himno: ${bautismoForm.firstHymn}
Primera Oracion: ${bautismoForm.firstPrayer}
Primer Mensaje: ${bautismoForm.firstMessage}
Segundo Mensaje: ${bautismoForm.secondMessage}
Himno Final: ${bautismoForm.finalHymn}
Oracion Final: ${bautismoForm.finalPrayer}`;
    } else if (selectedValue === 'actividad') {
      message = `*Actividad: ${actividadForm.activityName}*

Dirige: ${actividadForm.leader}
Primer Himno: ${actividadForm.firstSong}
Oracion Inicial: ${actividadForm.openingPrayer}
Mensaje Principal: ${actividadForm.mainMessage}
Mensaje Final: ${actividadForm.closingMessage}
Himno Final: ${actividadForm.finalSong}
Oracion Final: ${actividadForm.closingPrayer}`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  const actividadAgenda = (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row bg-gray-100 gap-2 m-4 p-2">
        <div className="flex flex-col p-2 gap-2">
          <div>
            <h3 className="text-sm">Dirige</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="leader"
              value={actividadForm.leader}
              onChange={handleActividadChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Nombre de la Actividad</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="activityName"
              value={actividadForm.activityName}
              onChange={handleActividadChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Primer Himno</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="firstSong"
              value={actividadForm.firstSong}
              onChange={handleActividadChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Oracion Inicial</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="openingPrayer"
              value={actividadForm.openingPrayer}
              onChange={handleActividadChange}
            />
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <div>
            <h3 className="text-sm">Mensaje Principal</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="mainMessage"
              value={actividadForm.mainMessage}
              onChange={handleActividadChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Actividad</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="closingMessage"
              value={actividadForm.closingMessage}
              onChange={handleActividadChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Himno final</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="finalSong"
              value={actividadForm.finalSong}
              onChange={handleActividadChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Oracion final</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="closingPrayer"
              value={actividadForm.closingPrayer}
              onChange={handleActividadChange}
            />
          </div>
        </div>
      </div>
      <button
        className="bg-green-500 text-white rounded-sm p-2"
        onClick={sendToWhatsApp}
      >
        Send to Whatsapp
      </button>
    </div>
  );

  const baptismalAgenda = (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row bg-gray-100 gap-2 m-4 p-2">
        <div className="flex flex-col p-2 gap-2">
          <div>
            <h3 className="text-sm">Dirige</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="director"
              value={bautismoForm.director}
              onChange={handleBautismoChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Nombre del Bautismo</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="baptismName"
              value={bautismoForm.baptismName}
              onChange={handleBautismoChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Primer Himno</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="firstHymn"
              value={bautismoForm.firstHymn}
              onChange={handleBautismoChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Primera Oracion</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="firstPrayer"
              value={bautismoForm.firstPrayer}
              onChange={handleBautismoChange}
            />
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <div>
            <h3 className="text-sm">Primer Mensaje</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="firstMessage"
              value={bautismoForm.firstMessage}
              onChange={handleBautismoChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Segundo Mensaje</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="secondMessage"
              value={bautismoForm.secondMessage}
              onChange={handleBautismoChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Himno final</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="finalHymn"
              value={bautismoForm.finalHymn}
              onChange={handleBautismoChange}
            />
          </div>
          <div>
            <h3 className="text-sm">Oracion final</h3>
            <input
              className="text-sm p-1 w-[150px]"
              placeholder="Name..."
              name="finalPrayer"
              value={bautismoForm.finalPrayer}
              onChange={handleBautismoChange}
            />
          </div>
        </div>
      </div>
      <button
        className="bg-green-500 text-white rounded-sm p-2"
        onClick={sendToWhatsApp}
      >
        Send to Whatsapp
      </button>
    </div>
  );

  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <p>
        En esta pagina podras hacer una agenda para una actividad de manera
        rapida y sencilla. Tambien te permite exportar la agenda a whatsapp y
        guardarla.
      </p>
      <p>
        Si tienes alguna pregunta porfavor dirigete a la seccion About o llame a
        829-843-5678
      </p>
      <h2 className="font-semibold text-green-900">Agenda</h2>
      <div className="flex flex-col items-center">
        <select
          className="p-2 border rounded-sm border-black"
          value={selectedValue}
          onChange={handleChange}
        >
          <option value="">---</option>
          <option value="bautismo">Bautismo</option>
          <option value="actividad">Actividad: Espiritual</option>
        </select>
        {selectedValue === 'bautismo' && baptismalAgenda}
        {selectedValue === 'actividad' && actividadAgenda}
      </div>
    </div>
  );
};

export default TasksPage;
