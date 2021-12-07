window.test2 = function() {
    d3.csv('https://raw.githubusercontent.com/Siyuan-Yu/IVFinal/main/pair.csv').then(function(data) {
        var PieReceiveName1;
        var PieReceiveName2;

        PieReceiveName1 = window.PieReceiveName1;
        PieReceiveName2 = window.PieReceiveName2;
        debugger;
        var dataToDraw;

        function getData() {
            data.forEach((d) => {
                d.Recipient_name = d.Recipient_name;
                d.Donor_name = d.Donor_name;
                d.Adjectivizer_or_Adverbializer = +d.Adjectivizer_or_Adverbializer;
                d.Particle = +d.Particle;
                d.Case_Suffixes = +d.Case_Suffixes;
                d.Noun = +d.Noun;
                d.Nominalizer = +d.Nominalizer;
                d.Number_and_Numeral_Representations = +d.Number_and_Numeral_Representations;
                d.Valency_Changing_Verbal_Suffixes = +d.Valency_Changing_Verbal_Suffixes;
                d.Verb = +d.Verb;
            });

            var dataOneLine = data
                .filter((d) => d.Recipient_name === PieReceiveName1 && d.Donor_name === PieReceiveName2)
                .map((d) => [
                    d.Adjectivizer_or_Adverbializer,
                    d.Particle,
                    d.Case_Suffixes,
                    d.Noun,
                    d.Nominalizer,
                    d.Number_and_Numeral_Representations,
                    d.Valency_Changing_Verbal_Suffixes,
                    d.Verb,
                ]);

            dataToDraw = dataOneLine[0];
        }

        var svg = d3.select('#chartx'),
            width = svg.attr('width'),
            height = svg.attr('height'),
            radius = Math.min(width, height) / 2,
            g = svg.append('g').attr('transform', 'translate(' + width / 3 + ',' + height / 2 + ')');

        var color = d3.scaleOrdinal([
            '#98abc5',
            '#8a89a6',
            '#7b6888',
            '#6b486b',
            '#a05d56',
            '#d0743c',
            '#ff8c00',
            '#7cd6cf',
            '#76da91',
        ]);

        var circle = svg
            .append('circle')
            .attr('transform', `translate(${width / 3 - 50}, 10)`)
            .attr('cx', 200)
            .attr('cy', 20)
            .attr('r', 6)
            .style('fill', color(0));

        var text = svg
            .append('text')
            .attr('x', 250)
            .attr('y', 20)
            .attr('transform', `translate(${width / 3 - 80}, 10)`)
            .text('Adjectivizer_or_Adverbializer')
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');

        var circle = svg
            .append('circle')
            .attr('transform', `translate(${width / 3 - 50}, 30)`)
            .attr('cx', 200)
            .attr('cy', 20)
            .attr('r', 6)
            .style('fill', color(1));

        var text = svg
            .append('text')
            .attr('x', 250)
            .attr('y', 20)
            .attr('transform', `translate(${width / 3 - 80}, 30)`)
            .text('Particle')
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');

        var circle = svg
            .append('circle')
            .attr('transform', `translate(${width / 3 - 50}, 50)`)
            .attr('cx', 200)
            .attr('cy', 20)
            .attr('r', 6)
            .style('fill', color(2));

        var text = svg
            .append('text')
            .attr('x', 250)
            .attr('y', 20)
            .attr('transform', `translate(${width / 3 - 80}, 50)`)
            .text('Case_Suffixes')
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');

        var circle = svg
            .append('circle')
            .attr('transform', `translate(${width / 3 - 50}, 70)`)
            .attr('cx', 200)
            .attr('cy', 20)
            .attr('r', 6)
            .style('fill', color(3));

        var text = svg
            .append('text')
            .attr('x', 250)
            .attr('y', 20)
            .attr('transform', `translate(${width / 3 - 80}, 70)`)
            .text('Noun')
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');

        var circle = svg
            .append('circle')
            .attr('transform', `translate(${width / 3 - 50}, 90)`)
            .attr('cx', 200)
            .attr('cy', 20)
            .attr('r', 6)
            .style('fill', color(4));

        var text = svg
            .append('text')
            .attr('x', 250)
            .attr('y', 20)
            .attr('transform', `translate(${width / 3 - 80}, 90)`)
            .text('Nominalizer')
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');

        var circle = svg
            .append('circle')
            .attr('transform', `translate(${width / 3 - 50}, 110)`)
            .attr('cx', 200)
            .attr('cy', 20)
            .attr('r', 6)
            .style('fill', color(5));

        var text = svg
            .append('text')
            .attr('x', 250)
            .attr('y', 20)
            .attr('transform', `translate(${width / 3 - 80}, 110)`)
            .text('Number_and_Numeral_Representations')
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');

        var circle = svg
            .append('circle')
            .attr('transform', `translate(${width / 3 - 50}, 130)`)
            .attr('cx', 200)
            .attr('cy', 20)
            .attr('r', 6)
            .style('fill', color(6));

        var text = svg
            .append('text')
            .attr('x', 250)
            .attr('y', 20)
            .attr('transform', `translate(${width / 3 - 80}, 130)`)
            .text('Valency_Changing_Verbal_Suffixes')
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');

        var circle = svg
            .append('circle')
            .attr('transform', `translate(${width / 3 - 50}, 150)`)
            .attr('cx', 200)
            .attr('cy', 20)
            .attr('r', 6)
            .style('fill', color(7));

        var text = svg
            .append('text')
            .attr('x', 250)
            .attr('y', 20)
            .attr('transform', `translate(${width / 3 - 80}, 150)`)
            .text('Verb')
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');

        getData();
        drawPie(dataToDraw);

        function mouseClick() {
            // PieReceiveName1 = PieSentName1;
            // PieReceiveName2 = PieSentName2;
            getData();

            console.log('CLICKED');
            d3.select('arc').html('');

            drawPie(dataToDraw);
        }

        function drawPie(da) {
            // Generate the pie
            var pie = d3.pie();

            // Generate the arcs
            var arc = d3.arc().innerRadius(0).outerRadius(radius);

            //Generate groups
            var arcs = g
                .selectAll('arc')
                .data(pie(da))
                .enter()
                .append('g')
                .attr('class', 'arc')
                .attr('stroke', 'white');

            //Draw arc paths
            arcs
                .append('path')
                .attr('fill', function(d, i) {
                    return color(i);
                })
                .attr('d', arc);
        }
    });
};