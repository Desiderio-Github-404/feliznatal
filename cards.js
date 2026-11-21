(() => {
  "use strict";
  const canvas = document.getElementById("christmas-card-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const $ = id => document.getElementById(id);
  const fields = {template:$("card-template"), recipient:$("card-recipient"), message:$("card-message"), sender:$("card-sender")};
  const note = $("card-export-note");
  const W = canvas.width, H = canvas.height;
  const themes = {
    classico:{top:"#102f25",bottom:"#1c563b",gold:"#e8c879",cream:"#fff6df",accent:"#b83238",kind:"tree"},
    elegante:{top:"#641d2a",bottom:"#a52d39",gold:"#f0d18a",cream:"#fff4e7",accent:"#f7e4bd",kind:"ornament"},
    divertido:{top:"#d9eee7",bottom:"#a9d9c8",gold:"#b52d36",cream:"#183c31",accent:"#f7c85c",kind:"snow"},
    cristao:{top:"#f1e4c8",bottom:"#d7bd8c",gold:"#8c672d",cream:"#49351e",accent:"#fff8df",kind:"star"},
    minimal:{top:"#f8f4eb",bottom:"#e9e0d1",gold:"#9a7540",cream:"#34483c",accent:"#b52d36",kind:"minimal"},
    tropical:{top:"#0c5145",bottom:"#187b65",gold:"#f1cb69",cream:"#fff4d8",accent:"#d84b3e",kind:"leaf"},
    familia:{top:"#7c2833",bottom:"#bd5c50",gold:"#f2d69a",cream:"#fff5e9",accent:"#315b45",kind:"heart"},
    noite:{top:"#101f45",bottom:"#293f70",gold:"#f5d98d",cream:"#fff5df",accent:"#b8d6ef",kind:"star"}
  };
  function roundedRect(x,y,w,h,r,fill,stroke) {
    ctx.beginPath();
    ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
    ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
    ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
    ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
    if(fill){ctx.fillStyle=fill;ctx.fill();}
    if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=5;ctx.stroke();}
  }
  function star(x,y,r,color) {
    ctx.save();ctx.translate(x,y);ctx.fillStyle=color;ctx.beginPath();
    for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5;const rr=i%2?r*.38:r;ctx.lineTo(Math.cos(a)*rr,Math.sin(a)*rr);}
    ctx.closePath();ctx.fill();ctx.restore();
  }
  function drawTree(x,y,size,color,theme) {
    ctx.save();ctx.translate(x,y);ctx.fillStyle=color;
    for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(0,-size*.55+i*size*.28);ctx.lineTo(-size*.42+i*size*.1,size*.15+i*size*.25);ctx.lineTo(size*.42-i*size*.1,size*.15+i*size*.25);ctx.closePath();ctx.fill();}
    ctx.fillStyle=theme.gold;ctx.fillRect(-size*.07,size*.38,size*.14,size*.2);star(0,-size*.57,size*.12,theme.gold);ctx.restore();
  }
  function wrapText(text,maxWidth,font) {
    ctx.font=font;const words=String(text||"").trim().split(/\s+/);const lines=[];let line="";
    words.forEach(word=>{const test=line?line+" "+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word;}else line=test;});
    if(line)lines.push(line);return lines;
  }
  function draw() {
    const t=themes[fields.template.value]||themes.classico;
    const gradient=ctx.createLinearGradient(0,0,W,H);gradient.addColorStop(0,t.top);gradient.addColorStop(1,t.bottom);
    ctx.fillStyle=gradient;ctx.fillRect(0,0,W,H);
    if(fields.template.value==="cristao"||fields.template.value==="minimal"){
      ctx.fillStyle="rgba(255,255,255,.18)";ctx.fillRect(0,0,W,H);
    }
    roundedRect(42,42,W-84,H-84,26,null,t.gold);
    roundedRect(62,62,W-124,H-124,20,null,t.gold);
    if(t.kind==="tree"){drawTree(170,230,190,t.cream,t);drawTree(1030,230,190,t.cream,t);drawTree(600,1390,250,t.cream,t);}
    if(t.kind==="ornament"){
      [180,600,1020].forEach((x,i)=>{ctx.strokeStyle=t.gold;ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(x,65);ctx.lineTo(x,210+i%2*45);ctx.stroke();ctx.fillStyle=i%2?t.cream:t.gold;ctx.beginPath();ctx.arc(x,235+i%2*45,48,0,Math.PI*2);ctx.fill();});
    }
    if(t.kind==="snow"){for(let i=0;i<32;i++){const x=(i*197+83)%W,y=(i*317+37)%H;star(x,y,10+(i%4)*5,"rgba(255,255,255,.7)");}}
    if(t.kind==="star"){star(600,255,115,t.gold);star(235,210,35,t.gold);star(965,210,35,t.gold);ctx.strokeStyle=t.gold;ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(600,350);ctx.lineTo(600,1220);ctx.stroke();}
    if(t.kind==="leaf"){for(let i=0;i<10;i++){const x=i%2?90:W-90,y=170+i*130;ctx.save();ctx.translate(x,y);ctx.rotate(i%2?-.55:.55);ctx.fillStyle=i%2?"rgba(235,205,120,.8)":"rgba(255,255,255,.45)";ctx.beginPath();ctx.ellipse(0,0,27,78,0,0,Math.PI*2);ctx.fill();ctx.restore();}}
    if(t.kind==="heart"){ctx.font="100px serif";ctx.textAlign="center";ctx.fillStyle="rgba(255,255,255,.55)";ctx.fillText("♥",150,260);ctx.fillText("♥",1050,1340);}
    if(t.kind==="minimal"){ctx.strokeStyle=t.gold;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(230,240);ctx.lineTo(970,240);ctx.moveTo(230,1360);ctx.lineTo(970,1360);ctx.stroke();}
    if(t.kind==="star"||t.kind==="minimal"||t.kind==="snow"){star(160,150,23,t.gold);star(1040,1450,25,t.gold);}
    ctx.textAlign="center";ctx.textBaseline="middle";
    ctx.fillStyle=t.gold;ctx.font="bold 32px Georgia,serif";ctx.fillText("✦  UMA MENSAGEM ESPECIAL  ✦",600,390);
    ctx.fillStyle=t.cream;ctx.font="bold 112px Georgia,serif";ctx.fillText("Feliz Natal!",600,545);
    ctx.fillStyle=t.gold;ctx.font="34px Georgia,serif";ctx.fillText("Para",600,690);
    let recipient=fields.recipient.value.trim()||"Minha família";
    let recFont="bold 54px Georgia,serif";if(ctx.measureText(recipient).width>900)recFont="bold 42px Georgia,serif";
    ctx.fillStyle=t.cream;ctx.font=recFont;ctx.fillText(recipient,600,765);
    ctx.strokeStyle=t.gold;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(230,830);ctx.lineTo(970,830);ctx.stroke();
    const message=fields.message.value.trim()||"Que a paz e a alegria estejam presentes neste Natal.";
    let fontSize=43,lines=wrapText(message,850,"43px Georgia,serif");
    while(lines.length>8&&fontSize>30){fontSize-=2;lines=wrapText(message,850,fontSize+"px Georgia,serif");}
    ctx.font=fontSize+"px Georgia,serif";ctx.fillStyle=t.cream;
    const lineHeight=fontSize*1.48;const startY=1010-(lines.length*lineHeight)/2;
    lines.slice(0,8).forEach((line,i)=>ctx.fillText(line,600,startY+i*lineHeight));
    ctx.fillStyle=t.gold;ctx.font="italic 38px Georgia,serif";ctx.fillText(fields.sender.value.trim()||"Com carinho",600,1285);
    ctx.font="34px Georgia,serif";ctx.fillText("✧  Boas Festas  ✧",600,1410);
  }
  function downloadBlob(blob,name){const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1200);}
  function exportImage(type) {
    const mime=type==="jpg"?"image/jpeg":"image/png";
    canvas.toBlob(blob=>{if(!blob){note.textContent="Não foi possível gerar a imagem neste navegador.";return;}downloadBlob(blob,"cartao-de-natal."+ (type==="jpg"?"jpg":"png"));note.textContent="Cartão descarregado em "+(type==="jpg"?"JPEG":"PNG")+".";
    },mime,type==="jpg"?.94:undefined);
  }
  function exportPDF() {
    try {
      const jpeg=canvas.toDataURL("image/jpeg",.94).split(",")[1];
      const image=atob(jpeg);
      const stream="q\n595 0 0 842 0 0 cm\n/Im0 Do\nQ";
      const objects=[
        "<< /Type /Catalog /Pages 2 0 R >>",
        "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>",
        "<< /Type /XObject /Subtype /Image /Width 1200 /Height 1600 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length "+image.length+" >>\nstream\n"+image+"\nendstream",
        "<< /Length "+stream.length+" >>\nstream\n"+stream+"\nendstream"
      ];
      let pdf="%PDF-1.4\n%âãÏÓ\n";const offsets=[0];
      objects.forEach((obj,i)=>{offsets.push(pdf.length);pdf+=(i+1)+" 0 obj\n"+obj+"\nendobj\n";});
      const xref=pdf.length;pdf+="xref\n0 "+(objects.length+1)+"\n0000000000 65535 f \n";
      for(let i=1;i<offsets.length;i++)pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \n";
      pdf+="trailer\n<< /Size "+(objects.length+1)+" /Root 1 0 R >>\nstartxref\n"+xref+"\n%%EOF";
      const bytes=new Uint8Array(pdf.length);for(let i=0;i<pdf.length;i++)bytes[i]=pdf.charCodeAt(i)&255;
      downloadBlob(new Blob([bytes],{type:"application/pdf"}),"cartao-de-natal.pdf");
      note.textContent="Cartão descarregado em PDF.";
    } catch (_) {note.textContent="Não foi possível gerar o PDF neste navegador. Experimenta exportar em PNG.";}
  }
  Object.values(fields).forEach(field=>field.addEventListener("input",draw));
  fields.template.addEventListener("change",draw);
  document.querySelectorAll("[data-card-message]").forEach(button=>button.addEventListener("click",()=>{fields.message.value=button.dataset.cardMessage;draw();}));
  $("card-download-png").addEventListener("click",()=>exportImage("png"));
  $("card-download-jpg").addEventListener("click",()=>exportImage("jpg"));
  $("card-download-pdf").addEventListener("click",exportPDF);
  draw();
})();