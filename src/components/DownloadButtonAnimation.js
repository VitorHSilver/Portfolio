import React, { useEffect } from 'react';
import './DownloadButton.css';
import gsap from 'gsap';
import { Elastic } from 'gsap/all';

const DownloadButton = () => {
     useEffect(() => {
          document.querySelectorAll('.button').forEach((button) => {
               let duration = 3000,
                    svg = button.querySelector('svg'),
                    svgPath = new Proxy(
                         {
                              y: null,
                              smoothing: null,
                         },
                         {
                              set(target, key, value) {
                                   target[key] = value;
                                   if (target.y !== null && target.smoothing !== null) {
                                        svg.innerHTML = getPath(target.y, target.smoothing, null);
                                   }
                                   return true;
                              },
                              get(target, key) {
                                   return target[key];
                              },
                         }
                    );

               button.style.setProperty('--duration', duration);

               svgPath.y = 20;
               svgPath.smoothing = 0;

               button.addEventListener('click', (e) => {
                    if (!button.classList.contains('loading')) {
                         button.classList.add('loading');

                         gsap.to(svgPath, {
                              smoothing: 0.3,
                              duration: (duration * 0.065) / 1000,
                         });

                         gsap.to(svgPath, {
                              y: 12,
                              duration: (duration * 0.265) / 1000,
                              delay: (duration * 0.065) / 1000,
                              ease: Elastic.easeOut.config(1.12, 0.4),
                         });

                         setTimeout(() => {
                              svg.innerHTML = getPath(0, 0, [
                                   [3, 14],
                                   [8, 19],
                                   [21, 6],
                              ]);
                         }, duration / 2);
                         setTimeout(() => {
                              button.classList.remove('loading');
                              svg.innerHTML = getPath(20, 0, null);
                              svgPath.y = 20;
                              svgPath.smoothing = 0;
                         }, duration + 2000);
                    }
               });
          });

          function getPoint(point, i, a, smoothing) {
               let cp = (current, previous, next, reverse) => {
                         let p = previous || current,
                              n = next || current,
                              o = {
                                   length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                                   angle: Math.atan2(n[1] - p[1], n[0] - p[0]),
                              },
                              angle = o.angle + (reverse ? Math.PI : 0),
                              length = o.length * smoothing;
                         return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
                    },
                    cps = cp(a[i - 1], a[i - 2], point, false),
                    cpe = cp(point, a[i - 1], a[i + 1], true);
               return `C ${cps[0]},${cpe[0]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
          }

          function getPath(update, smoothing, pointsNew) {
               let points = pointsNew
                         ? pointsNew
                         : [
                                [4, 12],
                                [12, update],
                                [20, 12],
                           ],
                    d = points.reduce(
                         (acc, point, i, a) =>
                              i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`,
                         ''
                    );
               return `<path d="${d}" />`;
          }
     }, []);

     return (
          <a
               href="https://drive.usercontent.google.com/u/0/uc?id=1AjRRpha6woDFSfhDl9tMpRZFcN_9nJZk&export=download"
               download="Vitor_Henrique_da_Silva_Curriculo.pdf"
               rel="noreferrer"
               className="button dark-single w-12 h-10 items-center transition ease hover:scale-125 duration-300 self-center"
          >
               <div>
                    <svg viewBox="0 0 24 24"></svg>
               </div>
          </a>
     );
};

export default DownloadButton;
