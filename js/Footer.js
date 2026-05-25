function GenerateFooter()
{
    const footer = document.createElement("div");
    footer.style="width: 100%; height: 60px; background-color: #0F1720;";
    footer.innerHTML = `<p style="color: white; text-align: center; font-family: Roboto; padding: 1%;">COPYRIGHT NORTHWEST DYNAMICS, INC.</p>`;

    return footer;

}

export default GenerateFooter;