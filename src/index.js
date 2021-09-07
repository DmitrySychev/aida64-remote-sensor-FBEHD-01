document.addEventListener("DOMContentLoaded", function(e) {
  const url = "http://192.168.1.24:3050/sse"

  const evtSource = new EventSource(url);

  // reload window if no connection
  evtSource.addEventListener('error', (e) => {
    location.reload()
  });

  evtSource.onmessage = function(event) {

  const cpuTempGauge = event.data.split("|")[5].slice(11, 15)
  const cpuClockGauge = event.data.split("|")[3].slice(9, 18)
  const moboVrmGauge = event.data.split("|")[7].slice(3, 7)
  const gpuTempGauge = event.data.split("|")[11].slice(9, 12)
  const waterTempGauge = event.data.split("|")[21].slice(9, 12)
  const pchTempGauge = event.data.split("|")[15].slice(9, 13)
  const dimmTempGauge = event.data.split("|")[17].slice(6, 9)
  const gpuMemGauge = event.data.split("|")[13].slice(11, 14)
  const gpuClockGauge = event.data.split("|")[9].slice(9, 17)
  const pumpRpmGauge = event.data.split("|")[19].slice(11, 15)

  $("#GaugeMeter_CPU_Clock").gaugeMeter({text: cpuClockGauge, style: "Arch"});
  $("#GaugeMeter_1").gaugeMeter({percent:cpuTempGauge, showvalue: true, min: 50, style: "Arch", text: cpuTempGauge, text_lower: cpuClockGauge});
  $("#GaugeMeter_VRM").gaugeMeter({text: moboVrmGauge, style: "Arch"});

  $("#GaugeMeter_2").gaugeMeter({percent:pchTempGauge, showvalue: true, min: 50, style: "Arch", text: pchTempGauge});
  $("#GaugeMeter_DIMM").gaugeMeter({text: dimmTempGauge, style: "Arch"});

  $("#GaugeMeter_GPU_Clock").gaugeMeter({text: gpuClockGauge, style: "Arch"});
  $("#GaugeMeter_3").gaugeMeter({percent:gpuTempGauge, showvalue: true, min: 50, style: "Arch", text: gpuTempGauge});
  $("#GaugeMeter_GPU_MEM").gaugeMeter({text: gpuMemGauge, style: "Arch"});

  $("#GaugeMeter_4").gaugeMeter({percent:waterTempGauge, showvalue: true, min: 50, style: "Arch", text: waterTempGauge});
  $("#GaugeMeter_PUMP").gaugeMeter({text: pumpRpmGauge, style: "Arch"});

  }
});