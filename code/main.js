workspace.clientAdded.connect(window => {
    if (!window.normalWindow) return;
    area = workspace.clientArea(KWin.MaximizeArea, window);
    window.geometry.x = area.x + area.width / 2 - window.width / 2;
    window.geometry.y = area.y + area.height / 2 - window.height / 2;
});
