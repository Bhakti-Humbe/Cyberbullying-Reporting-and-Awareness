import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Calendar, Download, ExternalLink } from "lucide-react"

export default function AwarenessPage() {
  return (
    <div className="container py-12">
      <div className="mb-10 space-y-4">
        <h1 className="text-4xl font-bold">Awareness Resources</h1>
        <p className="text-xl text-muted-foreground">
          Educational videos, sessions, and materials to help understand and prevent cyberbullying.
        </p>
      </div>

      <Tabs defaultValue="videos" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VideoCard
              title="What is Cyberbullying?"
              description="This video explains what cyberbullying is, how it affects people, and how to handle it."
              duration="1:45"
              thumbnail="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhEQEhIRFhMVExUWEhcVFRAXFhgYFRMWGBcaFRUYHSggGBomGxgXLTEhJyorLi4uGCEzODMsNygtLisBCgoKDg0OGxAQGy0lICYwKzArLS0rLTU1LTIvLS8vLS0tLys1LSstLi0tKy0tNTAtLS0rKy0tLS0tLS0tMC81Lf/AABEIAK4BIQMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQECAwQGB//EAD0QAAIBAgIGBwQJBAMBAQAAAAABAgMRBCEFEjFBUZEGEyJhcYGhMrHR8BUWQlJTYnLB0hQjkqKCsuFDM//EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAuEQACAgEEAAQFAgcAAAAAAAAAAQIRAwQSITEFIlGRE0FhcfAVsRQjMoGh4fH/2gAMAwEAAhEDEQA/AO8AB7ZyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIvSWn6FG6lLWn92Fm/PcvMgavTSV+zRjb80m36JHSOKUukLOyByuE6ZxbtUpSj3xal6O37nRYPGU6sdanNSXdtXitqfiRKEo9oWbAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsq1FFOUmkltbOC03p+tUbim4U7uyjk2vzS2vw2E30sxTvCktltaXfm0vc+Zzs4pqzMb8QWLNTja+f+jZDSb8e6+SKBlxFHV8NxiPdx5I5IqcXaZinBxdMGbCYqdKSnTk4yW9b+5reu4wguVPQ+j+nY4hartGql2o7muMe7u3EyeT4etKEozg7Si7p956borGqtShVStrLNcGnaS5pmLNi28rosmbYAOBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByHSiDVe+5wjbyuizQOiuvnJOVoxScre0732ctp0WmNGqtC2ycc4v3p9zNXQOiltkqtKtTdm4vKaex5pp8GlwPD1uGUJuXyZ6umyqUFH5ox9I+jsOrUqMH2cpRV22uPivnYcFUjZuL2ptPydmeznnvT3RLhU/qYLsz9runbO/dJepr8H1O2bxSffX3OWtx3FSXyOZBbTmmrouPpTzDDiKuqstrPTOilv6Sg0rXhd971nd+bPKsRU1n3LYb2B0/iaMVCnWkorZFqMltvskmZcty6JTPXQcloLpgppRxCUW/txT1f+Udq8fcdXGSaTTTTzTWaa7mZ5RceyxcACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOU6RdJ3CTo0NXWWU5tXs96itja4vkcni8bXqJqdes09qcnq/4qyO0cMmrIs7nTHSqhQvGL62p92DyT/NLYvDN9xykuleMdWNVNKMX/APmrKDW9S3vLfysQNCk1Jp7F68DYq1NVXOiwQcXuCk07R61oTTNPEw1oZSXtwdtaL/dd6NjSKpunJVtXUatLWaS5s8dwcpxnGqpyjNey4tpr/wA7jbxuNqVZa1WcpPdfYvBLJeR5T8F/mXGVR/ybVrfLTXJbpfBU41X1FXWjxs8u53yfijA4325lQe5CG1VdmFu3ZRIqAXIBM6A09Kg1GV5Um847498PhvIYESipKmD1ihWjOKnFpxkrprejIcJ0S0x1U1Rm/wC3N5X+zJ7PJ7/J8TuzBkg4Oi6YABzAAAAAKNgFQQmM6QRUtSjHrZ93srz3+7vNnRmkpTbp1KepNLWSvdSV7Np92WXeRuQJIAEgAAAAAAAAAAAAAAAAAAEfp/GOlh6tSPtWSj3OTUU/K9/IkDXx+EjVpypSvaS3bVndNeDsTGrVg8rBNaS6NV6V2l1kOMNvnDbyuQp6UZKXRQGKcbyXBK/mze0bVw6qL+pc1CzfZTd3uvbNLbs4GBqLcurblFNpOzTavldbsim9OTj6exbbxZaCrRRI6FQCsotJtp2W12djEq0W7JkbkKMgLddcVzRVSXFcybBUAAA9H6N6Q66hGTd5x7E/Fb/NWfM84Om6C4m1WpS3ShrLxi/hJ8jjnjcb9CUdsADCWAMGMxcKUXObsvVvglvZAVtJV8RlRTp09837T8/hzIcqBKaU0zTo3T7U90I2v5v7JEdXiMVbrL04O1qcdrvsTW9+PI2MDo2FPP2pfee3y4ElhK+pOE7X1ZJ28Gc22ySQwfRuhR6ulUrQp1KnswvHWk1wcneTLFomlVqv+lxEZ1MPO1WD4STUlrLw8LxtdG90j6O08XUw2JVTq6tPUkoyt2oKSnqtfZd9+e3Yy3QuiqGAniqzqJutO8Y3TcYptpLe223n4cG35yzZt3B6PwdJ/D7t7311Xzv9q5/KNVq2TBhw2O65SqNarc5qUeDUnl7uZsU5WafBp8meqnxZ5pu/RurFSqVKdO+zWaXlnbPuMONwMqdr2aexrYU6W6Cq4qVKrRacdS1m3G13fWXjfPwRt4uHVYejh5SUpxUb91k/Tcu4w4tRklk2vo1ZMOOOKM1K2+16EYADeZQAAAAAAAAAAAAAAAcV0wqU5VVCMY60V25JK7b2JvfZe86rSmNVGnKo9qyiuMnsXzwPPJzbbk3dttt8W9pVycejvhxqXLNGtgrtPb3EthqKhFRXmWYeG/kbAnllJUzvDFGLtAAHI6lGiA0lgnTetH2W8u58DoC2cE001dPaXhNxZzyY1NUcrVW9bHmikZWdzdxeDcG4bnnB+9eJom675R5zTTpklCV0mVNXB1Ps8jaNMXasgEn0Zq6uKovjJx/yi172iMNjR07VqL4VYPlNCStNA9UBWwPMsuc90kp61XDKXsNyT4Xyyfj8TcSMmncL1lGSXtR7cON455eVzVwdfXhGa3rPx3+pR9kozxi27JNvglcvcJQabi007rWjll3NZk7pHGf0Wj3iaUYSklSlLWvZ684Rd7NPJSy8CT0XiXWVSNRKUct2Wd8vccHke1zri6/PcscficRKpLWnJyfF/styMZfpVKlKtbOMHLxsmY2zpujGNvhBRcnSRTR0tWtUhuqRVSP6o2jL01WSyISo+1TmtsJX8U001539DJV0hPc1fclb3veYsniunx8Xf2/KNuPwzPPmq+5PVsXOUta7WVrRukktiXcYGaWE6x2k9jWx5PPwRumrT5viK1BxX1M2fD8J1uT+wABpOAAAAAAAAAAAAAAI/TmP6mlKS9p9mHi9/ltDJSt0jm+lWkOsqdXF9mnl4y38tnMhIq7sGZ8NHfyOLZ6EY7VRmirZFQCCwLJSzS4/sXNmCnK8rgGwAADWx1O8PDNEJiKF815o6GsuzLwfuIc36XzQaZi1K8yZGxdnfgSMZXSZrYul9peZXBz2x80d4+WVGY2TLhF/cp/rj/2RiNvRFPWr0I8asOWsm/Q6PoHqhQtuDy6Lg53Cw6qrVobr9ZT/AEy2peD/AHOiIbpDDV6rEL/5ytP9EsnyfvIkSieoaVjToxpJKq29aaknqxW3VV997d17ltbT0+11cI03K2s1dvJbty5EQDj8KJNmLGR1oVFxhJc0zHSTaTW9J8zZLKVPVjGK2JJK/crHDVaOGp272+L6+v8Aw16XVz0+7au67+hjdN7reZTCYPrG22sm4ztvas7bcmuPeXYvExpxc5PJer3JHKz0vVUpONRxcnrNKWquC9F6GVeE6eLT5f8Ac0PxbO01x7HoaVsip5z9O18/70svzv0yK/TdfP8AuyyX338D1VNI8s9FB53HTVfL+7PP8zMn0tX/ABqnNk7xR6ADiNG6ZqqrBzqScNa0k3lZ5X8tvkduWUrIAAJAAAAAABixOIjTWtOSirpXfFuyOJ6RaQ62q7PsQ7MeD4vzfokbvTHFSc4UrNRitbuk3vXGy97OdOcn8jXhx0txVRe03KdrKwpxsrFurbNbN6+BQ0GQFLktS0K5UKlSV9bUbprwzu/FLZ3kpWVlJR7ICtUvktgw+0xGSi+0gWNsAEAx132ZeD9xEEljp2jbi7EaejpFUGzDqX5qKNXyNCL1ZeDJA1MZDNM7ZFxZnNsmOiVHWxVP8qlJ+UWl6tEHh5XiuR1/QPD9qtU4KMF5u79yGSXkbJR2IAPPLAxYmipwlB7JJp+aMoAOf0VN6mpL2qbcJf8AHZ6G4a+Nh1eJUvs1o2f64bOaNlO2ZzLE9gujl4qVWeq3sirXz4t7+4zT6MwlG9Oq3wvqtPziSEerrKjWneOXZjJxSbvfzzS8jBiMZhcN26ldJ22dZJt22JUk87Xts2JHnvNl3HXbDb3yeUdJ6s+unRnFpUnZx23f73TXk1xIhy75Xf5cvdsRKdJNKLE4mrXXZi2lFO17Rio3ffZerIu723zeS2fPebE21yci26W92j3bXy+blOCbV3nLL57kZFF3Svks3lv3fHkVu7OV13ZcNm/f+4BbHe1bdFNK2/P3+hl6tcFyRRRtqrxb/f1ZeAWOKTVt+T5M9B0Ji+sowk9qWrLxjl65PzPP5bvH9mdJ0PxVpzpPZJa0fFbfT/qXg+SGdWADqQAAADntL9InSqunGEZKNta7d22r2VtmTXEltJY+FGDnL/it8nwXxPPq9VzlKctsm2/FsrJnfDj3cs7yp1OJoa8vYs3f7UGtue5o4ynhIuajrtRcknJrZFva1xsXYDFTjCpBPsTSuu9NZryyBkx45RlJt9m3hJJI7XSXR+nUglBKEoxSi1saSslLj47Tj8Vhp05OE4tSXzdPeiZ0L0hdNKnVu4LKMl7UVwa3oncSqGJp7VJbmvai/evBmXHLNinskrT6LS2tWcjoWlGVaEZRbXBbL/m7jtDQ0Xo2NFPO8ntla2W5LgjfPViqR52Wak+DzjSWG6urUp7oydvB5x9GjXi80zpemWEzhWW/sS8VnH0vyOZKNUzXCW6KZvgspSukXlS5HaQneVuC9/yjVM2MXbl87jCeviVQVHmZHc2DHiI3i+fIyA6NWihq4KW1eZ6X0Pw2phovfOUpvnqr0iuZ5lhoPrFFbW9Vd7eS9bHseFoqEIU1sjFRXkrGPLLyJEoygAzlgAACP05hnOjLV9uFpw8Y5+65r4aspwjNbJJP4omDmJ144aVanLYnr0lxU9y8GUl6ko2OkOmZJJOV5tWjsSiuKSyXzwONcbbL3ffd8385mfEYhzk5yau/my7jC1m3re45Elrzy1XZbfZ8lt+fMtvtk45bvZ+O8u1cra3u3hx2dpZeG4At1craub/Tv22z3L3FdVXS1bb9i3bNnfbkXb76y5f+lY722r/AAq3nfu8fncNdd/KXwK6y4rmNZcVzQBa3e23bwa95s4LEOnUhUX2ZJ+K3rzVzBrriuaKa64rmgD02Ek0ms01deD2Cc0k22kltbaSXizQ6PTvhqL/L6KTS9DHpnAddaLlNRjnaNrN8XdZls2eOKG6RfFjeSVIyVdOYeO2rF/pvL3IjcX0oWaowbf3p5Lks36GH6tQ41f8AX+JIU+jFJJLXqc4fxMUvE8S9fZmpaVLv9zksVUqVZa9Rtvvtl3JLYi2FDidj9WqX36nOH8R9WaX36nOH8Tn+p4fr7M6qByiKnVfVml9+pzh/EfVml9+pzh/Ej9UwfX2ZOxnKkj0eqNV4JbJKSfetVv3pEz9WaX36nOH8TLhNBU6c1UjKbava7jbNNbl3lsfiWCc1FXbaXRXJB7X9iSAB6x5hq6Swiq0p03vWT4NZp8zzucWm01ZptNcGtp6cc/p/QLqN1aVtd+1F5KXenufz41kjvhyKPDOWw0txsGvXwlSm+3CcbcU7c9jLqddPbtORrMGkKWyXk/2NEmmrmhXwTWcc1w3/APpu0+dVtkZM+J3uRqAucGtqfJllzb2ZTf6LYHrMbTy7MP7r/wCPs/7ap6cct0FwVoVK7Wc2ox/THN82/wDU6kwZf62WQAByJAAABrYrR9Ko06lOEmlZOSTsbIAI76Dw34FP/EfQWG/Ap8iRBG1AjfoLDfgU+Q+gcN+BDkySA2oEZ9AYb8CHr8R9X8N+DD/b4kmBtQIv6vYX8GPOXxH1dwv4Mec/iSgG1Aivq5hfwY/5VPiF0dwv4Mec/dclQNq9AWwikkkkklZJZJJcEXAEgAAAAAAFCoAKAqAAAAAAAAY50IPbCL8YxZkABrPAUvwqf+EfgWrRtH8Kn/ijbApE7n6ltOCjlFJLuSXuK6q4IqAQAAAAAAf/2Q=="
              tags={["Educational", "Students"]}
              videoUrl="https://youtu.be/6ctd75a7_Yw?si=mih2LZT8km5BldHY"
            />

            <VideoCard
              title="Stop Cyberbullying in Schools"
              description="Animated explainer video to help kids understand how to stop cyberbullying."
              duration="2:42"
              thumbnail="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMVFhUVFhYVFRUYFhcVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGislICUuLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAQIDBQYEAwYFBAMAAAABAgADEQQSIQUGMUFRByJhcZGhEzKBsUJS0SNicpLB8BQzQ6LhFiQ0s1Oywv/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAoEQACAgEEAQMFAAMAAAAAAAAAAQIDEQQSITFBEzJRBSIjgZEUQnH/2gAMAwEAAhEDEQA/AJ42onWGdqrG6ex1khNlp0lPJaR6WLzNpLdRGKWDVeAkkCMArQWioDABsiJIjhiDAALFRIjtGiWNhGJhAzKb+bSyYatS4M+W37yn5h7H1m8p4Sw4jzmA7X0QUaQC3cubaa5cuo9SJNwaWSG5dHL6VE5QxAKFwtzoCRYlb+X3nSu1nC5sNTIGq1Ba3Qi39Zz+vUQYUUzTAcVGYuTYFSoAVF66Xv4SdjduV66qtSoSqgWXyFuUlCvcyE7FFFFRw+crTvYswXX5bkgDhw4zc4HYJGHbC1SCUOZWA+UtrzmZ25hjRem9PTPSp1RfgX1vYcNMo9Z1XEYUFBUBsWUE876X/rM9j+DVXHnk5DisM1Nip5ehh0qbE3U2M023sKL6i/3mfNCxujW8DpK85RZswywwuHxDWD1co97S1oYZEHzX6km5lJSWq2mYes0e7+xS7D4hLj8vBfr1mecW/KNtb+E/2Vqn4lQDU6gWGp100Ez28Gyv8LinosxIUg5udmFxp11nddm7NpUgBTponUhRf14zMdqWwaBotjFAWqppLnvYEF1XvDnoZdU9vBn1ENyycoxFM2z8uo+9us024L2x1PL3gQyktow7h/SZqq3dK5RcnRuXXu+Bl3unXtjcO5Ac5guYaWuCuvW15oMR2O0BEMxJMBiTEMIsxNohjZESVj1oWWADOSJKR8rElYiRHZY2yySyxtlgBGyQR7LBEMsRFiIEUDLCsUIqJEVEAIUVCMAENGzHGjbQAIGW2G0XKOJtc/eVmHS7ASxSpqdeH0Etrj5K5vwSWMxm2GFfauDoAgiiWrMCdM4W6aA8Ra/pNNjsWKVJ6rHRFLH6C85juLiGq7WWq1s2Wq54k95SLC3C1wNf66Tn0Qh7jqWJ3aoPnzCoC752K1qqnN4WbQfujTwkKvudhzoS5/iFKr/7abS+qVwtszAX4XNrwEa/34ynJpxnszGL3Hw9RVWoFcIMq5qVNco6D4ISw8pYUNihEWmPh5VAVRlq3AAsBmaqxPmby4EIrE1kkuDN4ndalUvmS1+Yqf0NM/eVrdm1A8KlQeaq49bqfabamTyj+eR2oe5mKwvZ3RXjUVvNGX7Ey+wu73wxan8L1I+4lteGsj6cSatmisrbPrW0UHyZf1mV3+2ZiamENJMNVqOXpsAq3Wytc5iPC839ohljVaTyDtk1hnnmjsHEqGFTC4geBo1LLx+VstjIWzn+FWoGqpUK63AGVrBh84Np6SGYcGI+piw782JHjr95Y3lJFG0y7HgRwOoI4EeERNaAOBRD5ov6TF70bWaliRTTB4hlIQfEp0r0rseZ5WuLxBgftBaVtfa4Q5WBUjqCIS7ZU8xLPRn8EPUj8lpaC0TQqhhcR20qwTG8sSVjpWEViGMFYhlkgrElYDI2WCPFYIgHRDhhYrLJEBIMUGjNR7CZLbG8ppvlXWW1VSseIldlka1mRtrwiZzxN7anT3kbE76OPwmTu0tlayyFWprseEdJYxio4E5ym+7cCDHn3kdxpeZeTRwdEwDgm45SdSPE+XlKjdtStFSwOYgkjncy1pVbg+fW/CbIrEUZpPLM72i4q2EKDjUdE+l8x9gZluydM2Mqva1ktoRzJ4npoNOZ1/DJ/ahWutJeNizEXt+EiROxtP2lc2XhTt3tdfi8uunHzldj8E60dfFJWFmF4rJqfIf1iKUdXnp/dpWaAssMCLt5+8B84AJMSxhk+MSwNomNCxF2EbptFkw4wAHHSHaEBztr9oPWJIA7QwImGD4xiFiLU2/vpEKI1jqmWmx8LfzEL/WNLkTeEQ9p4NSLlVPS4mexmzaLI96Kq+UkEaagaHSa7FJdDKd0Fj5H7TVCXBnkuTK7DrXWXizPbEHdE0NLhMsvczRjgVaFaLtBaRAbKxJEdIiSIhjNocVaCAFJidvIvOUWP3xy8AZlsAS41Y+sl18GCvWJRZFs0eG28alMnhMlib1KrG/OSsLSstrxlcFY3BnY0mntjHKOXqtTVuUZMk4bZGb8ftJa7sKfxyGtOoODmOWr2v8AElerp1OznGCWlv0zliK5JY3OU/iltszdlVZeBsQfTWZirtKug+aXu4uOrVfiu5uF7o8+JnLrhOUksnRnOMYvg3VOopJAOn26ySKi2Nhwa3hMrhscRUIGhOhv1l9gqjZTmN9dCBadCa5MkHwc67UK5zhbcAPMX6Sb2NDXEcAb0rgC5tlqWu3Tjp4HrKTtPqf9xbnYenSX3Y2vcrnvWLqOPd0Q3sOZ7wv9Jln2aInVqZ848p8f7sJHpHxj6GRLhd4V5Bx21KdMhGbvtqqKGeowHEhFBNvG1o5RxAK5spUfvDKRbqDwgBJh28IzTcGxGoIuCDcEHgRaO5h4+8QxKjiLePrHFF+unnxiSRfjFofGJIAzAfOKiTJCBrDibeEP6QAUvlIm1Xsii3zVEHobn7CS1+srtoNmr0k/KGqH1Cj7GSj2Rn0WNRu6fKVyrcEEWGo9esfxVWwsBcmNJUGW8tXRU+zIUcEaLtTP4Tp5HhLSgZFxWIFSs7LwFlv1txMkUDM0uzR4JQEFoBFRCEERJEdIiGgA1aFFFoIAcT2MGvaxt5GaJ7AaxirvHQHyXPkspsVtBqjX1Al+lg7JrKwZ75quHDJL19TaJFYyJni1eelT4OA4eSwp1Y9Tqkm0r6dWSMI/flOql+KRLS1/miLx9KandnAJhaIdnF6veI5AcrSoTCGq6oBxI9Oc2NfCAr8JgBYdw/0nC08ecnbvlxgp9q0FDLURwQTY/WXOzqxvqRYgW5AeFpS0tnjMVfQc169LdBHNoUMRe9Ao4A+S+Vh4C+h9RFqdSoPauWT02mcll8Ix/aHgKzYlqqoWp2AzKQeHG6g3HHpNB2MMCMQO7oUPEltVI15AaaW497oInZO2fh1CmJRqbE3GYafQ8D9JrNk18PSZ3pKoWrYvl0F/zW4X68zYdJjWoy8M2f4zSzE03xbSTRYEXt1kamgIuNQdQR0j1HSXFbKvaGyArVcRSqPTqsozMCGU5B3QVcEBfAWlPtHadaps5ahVAa1NVY5mUg1WCd1bHkb8RL/aOzDULft6qK65HQZbEcypIuhI0uPvrFY7YtKrSSiSVRChAU2+TgCekAIeIx1agaakUmNRxTRFzLra9yxvZQASdDJ3+NKLUNXKPhrnJU3BSxN9bWPdPpG9sbOqVHo1aTJmpMTZ75WVhYi41B0kTbeHKYaqaj5nrFEYgZVAZggRF1soDNxJOpiAlbH20lZaZYhalRQ2TXiRchSwGew6S3pg3lRjNnPVVaZUIgZGLZrv+zYEBLCy3t81+F9Jbg+EYCyPCJPlFX85D2li/hoWAJPt5mDBEn194oecwW099CPhgVV+U/FKMtg2lrDjbjI+A3zVhrWe/idPaUPUQRetPNnRxK1BfEVGPIKg8guY+7H0mZpbx1HYCnVB8wp/p5y2obQYAlxxNyy8NTrpLKr4N4K7NPNLJYuxzH26ERrG08yOF07ptbjmIjtJwVLaFeIIiadPQnnxmtmVGI2HWt3Dxl9TEzga1cnqxPvNKsyGkkLFRtTAzxkBbNI1arCqVJCr1IAG2IgkEmCAsnHvg5agEu8XSUICOMg4xf2ssKuHqVAAiM3kJr0svyLLMt8cweEVt4tWl1g90MS/EBR48fQS/wAB2f8AOo5PgNBOlPXUV9y/hjjo7Z+DEK2skJQrEg00Y/TSdSwO6eHp8EF/HUy4pYFBwUTn3/Voyi4xiaqvpzjJSkzH7p7Lq5Mz91jz4sB0HSaJtj07AMzk9cxvJjNlJ8OEbOI1118I6H9iI3Jb2ZhaKmpUAfiSASb8NBc/SJo4XFoSVRXH7ri/vaZ5zUDOiC7I7qVB10YjTrHKe8T0hZg6kfmUr95xLcuTZ3KcKKQN4dpNVVsO9Mq9wRmFiPEfqJB3aFYFrliqMAxAJABk/EbQGLF2Fso0P4get5e9mKZqNWowBLVSNOBCWUG3L/mSrju4ZKx7cNGv2Ljc1wBlTTIACLCwuLc9ectaZ8ZFWlcqR+Hppytr6x9DYcZrisLBkm8vIKOLR2dFYFqZAcWPdJUMBfhwIP1km5mG2Btao9fEUqKIXNarUqO5IVVB+HSUBdSxCDyHWXGzt5Q6LmpFahrHDtTBByuLknMbXWw6SWSBog0hbVwArKFJKgVEfS2uRr5fI2j5xCh8mt8pbgbWBse9wv4TPYeu4w61ENquJrhrkX7pa+WxFtKa2EANSD5wEjxjRqrcgMMwtddLgHgSOUOoDbQi/jw468IAR9qYpkpsU1a2kwG3t7gHVWQgKt2BVgWJ07wIGmnrebbbFF2pkUz3rgjlexvac92vtbFozl0JtlDAWYgHQAAC5vrwvxlF2fBfTjyN7C3lwyk6BSSTawt9pJ2rj8NVIHw0YnnYX9eMThN48O6ZGRbjQo4F/QyuTZ+Er1Lopp2JBNNsttL3y8PaZfJp8F3gd3qQGanmQ8dGLDwuCfsRJ1GpWQgMpZfzLr6g6iQKODxNEfs2Fdel8tT0Oh9RLXZ+0S+j03Q9GUj7yp8vLLlwizwmIKCw0ViL9VP6S3oNM7jKyhCAReXNKqp/GvkDOppZuSafg5uqgotNeTGbbxFJcSwBtZveXNDHIVHeE5t2pJVXGlgCqMi5TfRyvzH3A+kzSbZxC8HMbjyU7zua4peohPXHUTiabzYgfijy731+cMMW9HYHqjrI1RpyxN86vP7x9N9H5gwwxbkdGME59/1oehghgNyOi4XdOgpzFQT14y5o4JF4KI5RrK3BgfrHgJztzNeEglWKgtBFkYYhwAw4AVG1aih1BIBIOUdbWvIuFqHPfiFufQXEd3j2YrtTrH/SvzI0b/m0zW2Nq/Aou/7yL9HYA+07GnnnT8eDm3Q/Msmb27imp4yoy3BLZ9Nbh+9f3j6b1vpcX6gjQxrF0hXVWRrVEFgeTJe4BPheFg9jVagJyrpxY1EA92nPml2dOrK4J2O2phKlJi6IGyknKLN9La85qezKnbAobEZiWHDgWJFrcePOct21lAdEN8vzMOBJ6eHGdd3BpZcDh9LXpqTpbUqDLaq9qK7bd8sfBpFa0WhjRMUplxApdlbuthjUNGopaq2Z2qU8x52C5WXQXOhvxMbrbu1KaB6LGpWFf47lyF+JcEMBbReIt5S8Wmbkh215d0geVxeSaYP5vVf0MBEChhqzNUq1bLdClOmpLBRqSWYgXYnpoLSs2bRrWwCvSdcgqGpcDuEABMxGgJufGaezdR6Ef1gzN0X1/wCIYAyuMxqI+PUuFqvkC62YhqaopXra/KWWKuMRhKYzEBKhJ1IuqoFzH14xW1MNVrOqlFWkGV2YEM75DmVMumUZgDe54cNZZtilHG481YD1taIDI0MYrjGEswVHqvUZWZWGW4porA3Gi3NvAdZldqVarNRtqwoLVr1DqQLErbhrbKb+I8Z0xMFQyuq06RVyWcAKQxJuS3U36zK78YCmlGriEZlepTWhZSuSoGIUCxB4DW4t8sTWUGcdGVobXoVaKnEUQwYaOV71+B15GR8Hs9wxbCtmH5HIzEfuvz+s0GM3a+HSpqCbKozLYEEkag3HW/CUXfoa0z3Ry6TLOrC4NULMtbiywm3mpsFqq9NuhBsfI8DNFT2krC5P1mVbbrMBmUGCjiGLWykA+lpmfBrXJpaNPPUA43It6zVUlHNfaZVcYKCisbAIVY34ZQRm/wBt5t6lje1x0IPvN+g9rZz9c/uRge1WghpUWt3g5A8ipJ+wnM61AdJ2re3ZhxFFqbggoM6OOFwDoRMdunukXtVrjTiqH7mTvkocsori58Io929yGxHfqXVOXVv0E3OC3IwtP/TBPU6n3mlpUgosBYCOTmzulLya4VRj4KKpuxhiLGkv8olJtHs5w1T5BkP7pt7TcxDsALnlFGUl0yTjF9o5PV7L6gJtV05XXWCXm0t/FWq6qCQDYEcDbjBNO68o20mQoVa1M/sqzDwJuPeXOD3xxdP51Djw0MqlpmKZwvEz1dn03T2dxx/w8vX9Qvhwnk2GC7QqJ0qqyHxGnqJosFt3D1R3Kin6icbxu0E4WBlYisTdbr5HWcbVfTa6/ZM7Gn105r74nodXB4GHecRwW2MZS+WqT4NqJeYLtGqppWphvEfoZzJUTXRvV0WdQrIGBU8CLTmnaDhwtFcMpJd3FQ6aBUvYE9SSNPCXuA7QcLU0YlD4i3vLWu+HxS92sQeTI+Vv+frJ02urKkuGRsgrMNPlHEqYr0TdfY3EU+Lr1NL2+k3+29iNSBNV1q0//kGlZOhP5x4SiGDCm/EHVWHysOoM2w2TWUUPdHgy+KJFFgRxIufFb/rO97s0suGpL0RBxzfgHOcR3gFqdgLd4/ad72UtqajoB9hyEUiUB8iACONCI8oiwQgkik2saVIsQAk5/GHm8YwDDvwgA/eAxkX1jg8oCGq1BW+ZQfoJQNulQ7l2rEUyDTVqrMqEcMqnTTxvNCTEwAhVKWlib8rnifOZPeHZZUGoouOfrNq6xjFUwKbMwFgCT5DUxNZJpnIMT3X0A148pa7Pqm4uJi0xOIZUbVszMMhGosFcAc/lqLaWeD2oVNn0txB0I8weEw3UNGunUKRpN6a3/a1AfxKR9DN5uhizUwWGdvmNJQ3moyn3E5ljsRmo/GcH4Q1W/wDquPlVRzW9iTwsLTcdmLk7No3Jvmq/+55p0acVyZtY05LBq6ovx101kVKYAsNJJNS9+saUSvX9xDTdMILDyxWWC0wGkQwmG7QN4DTX4FM2ZhqeizdkSi3g3bpYod8WYcGHESdUlGWWRmm44RxW0ObOr2eVgTlqKRyJBvBN3rw+TH6M/gzFfal9FkGsrsLkwlp5TJCVZ07dbZPrg51WjrgVr4UjWScLXtoYDX70XXpA6iZG2+zUljokfGjNdQwiKIvpFFCJEZX2sbER9br3qbEHwJH2h1qRMTRBHHhJJOXCIt45YdOtUrMFd2OtrEkzR4DN/iFoD5MpuvI2HHwPjKrYdAGsLctfSXuy6f8A3d2sLo80KrYitT3vgrN7MJZQOrAC2vHl4zt2CWygdAPpp05Tje9jrZVBBvUQdefQ2nZsLwt5fYekpn2aKx1mhFtIwKbBnJa6nLlFtR+a58dPSOMdJEtAKnhFLU841lhiAEtKnjFh/ESMvCKzGAEkHyh/SR76GLXiIxDhXzgAhj6w7+MACK+UpN9a/wAPZ+JYaH4TKPNxkHuwl6ZTb2gGiiEaPUW45WW7fdRGll4E3wcW2Ux/wte4Pdam6W450shFuV0La8NBLH/qoEDMVewGrIpceGYgmW29OzULI5Fsqm1tNLjpMhi8JT1NOnyvck/XSSnUmQhY4cDe2dq1MS/eJsOAvOodlG0VbCPRzC+HbMf4KhLD3Dj0mH2HuwK5UWILeOgA5mb/AHZ3ZXCLVGbMauQMNLZUzWH1zm8qnONMcyf6JRUrJcf001O45m36x4GRKelgOUlJOTbc7JtnQhXsjgXBBARIDAYhoZMSTFkMBGCJzQQyGDghW8afSOCsI1XcGdk5ZDvdpLFW0gNxiw0ZEnUOsdLSHSrR4NESHWEj1ag4SSjRmtSBl1Nig+Sq2veiz3Wo3qMei/eWWB/8xf4X+0Z3PoWFVvISVsg3xo0v3XsPpNVklJZRTVFxeGUm+TkFSLA5ri3IjnNlsLtLw5AXEB6TgAMwXOhNgLjLqOHMTPdodDu0bAXJbhzsL+0xWN0e45qp9RMjw2asuJ6GwW3sNWF6Vem/gG1+oOok74g6ieabDjLDB7dxVL/LxFVR0zll/la49otpJW/KPQpMK84thO0LHJ8zU6n8dMA+qFZd4TtUYf5uFU9SlQj/AGsp+8WGTVkTqaNHFbxmDwfadg2+dK1PzUOP9pJ9pcYXfnAPwxKL/GGp/wD2AiHuT8mnB8osGVuD2pQq/wCXWo1P4ait9jJ4HhAY8v1h38YhT5xat4iMQu3hKDeep36SdAzH6kAfYzRL5TK7YBfFPb8Cqntm/wD1Jw7Iy6KHeDDfEpNZSXBBpjwXj63MxmEofEK0wLDTQcWY20P1PCdcWiLKT0lSN3aa4sYlDYWYsnLOeDDpxN5lerULZRn0uv4WvTucIyj+yXsPZq4ekE0zcXI5noPASwKxJEFpyJ2Ssk5SN8YKEVFCkGskpItMmSabQQMXBeETBaSIhExDGGxjbGRYwXgic0KIDzsKkMtCCwys7pyA3tCteFHFggYpaceURKmEXiAezwjUEjO8aL3hgDc7sKP8Ox6sY3sru4ykerEeoMk7s5ThFykXF8w8ZDLZa9Nujr9xN0V9iRR/tkc38VjXoqVCiz287Tn2Je+XwFvSdM30w4OJonU6tfp8p0nNselnYdCZnfZdIaUxV42Iq0CI4DDBjV4YaPID6xdowDFh48gG6DoJJwu18RS/yq9ZPKowHpe0jZxFIL8B5k6CDwCL7C9oW0qZ/wDIzjo6I3uAD7zW7v8AaJiqoJq4elUAbLdcyffNOX1Rc2mv2crUcIhFu93mBGoufPpaKMU2S3P5Og7D7RMPVqMjUq1PISCbh00NuRv7SzwdQVGeoNQzlh5cva05XuXRzB3P4m+5nTC/wcMzDjay/wAVrScYpLIbm+zMY3tEWliKlM089NGKhlazd3RtDodb9Jc7O3zwda37XIelQZffh7zneM2KOJH15ypxOyyvyn6H9Zhv0cJtyZor1M48HeEqBhdSCORBuPoRFqZwLC4vEYc3ps6c7qSAfO3H6zT7K7R8QlhVC1R4jK38w/SYZaKS9ryaY6uL7WDrix0TG7M7QMLUsHzUj4jMvquvtNJhMbTqC9Oorj91gfW0plCUO0WqcZdMmmFGg0UKkhkkGTEloC0SxiAT3YIV4IsgefBDbhBBO8ccjo2seUwQRsAy8aepBBEAFBMfFOwgggAvZOLdGOViAeI5H6S5ONY6nje/pBBHua6DCZpt8yc2GqFtCR3bdVtOfbx0MtY+OsEEsHIrCIq0EECsK0MU4cEBixQMUcP5QQSWBivhDmYTZBprDgiYhqjYvbrp5X0vNpvBhCKPdNwFGvDl0MOCOPTGTNz8NalT65hf66zbbZa+VOSj3MEEs8IIlDicNM9t7DgKCORggkJ+1kilDxFSgjcVHnwPrBBMhIjvs38rEeB19438StS1uR4g/wBmCCNMGi82bv7i6ehqZx0cZ/c973mo2f2k02t8akV/eXUfynh7wQSE9PXLtEo3Tj5NXsrbFLELmouSOehFv5gJLZ+n6QQTk3RUJuKOhXLdFNiQ3gfWCCCVEz//2Q=="
              tags={["Awareness", "For Schools"]}
              videoUrl="https://youtu.be/iFlrCuSyhvU?si=7bhnhPP_IptGopRL"
            />

            <VideoCard
              title="How to Deal with Cyberbullying"
              description="BBC’s Own It advice on what to do when facing cyberbullying."
              duration="5:08"
              thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdz9bpziJ6ccxlk9x1HHseDKY9wn6_97CZw&s"
              tags={[ "Teens"]}
              videoUrl="https://youtu.be/Jwu_7IqWh8Y?si=J1WWC3yr-fvZKGZs"
            />

            
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Your sessions code stays the same */}
          </div>
        </TabsContent>

        <TabsContent value="materials" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Your materials code stays the same */}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 p-6">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
          <div className="md:flex-1">
            <h2 className="text-2xl font-bold">Request Custom Awareness Session</h2>
            <p className="mt-2 text-muted-foreground">
              We offer customized awareness sessions for schools, organizations, and communities. Our team can tailor
              content to your specific needs and audience.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild size="lg">
              <Link href="/awareness/request">Request a Session</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function VideoCard({ title, description, duration, thumbnail, tags, videoUrl }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={title} className="h-48 w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full">
              <Play className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
            <Clock className="h-3 w-3" />
            {duration}
          </div>
        </a>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
